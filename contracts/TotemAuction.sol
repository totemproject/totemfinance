pragma solidity ^0.6.2;

import "./TotemNFT.sol";
import "./TotemToken.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TotemAuction is Ownable {
    using SafeMath for uint256;
    using Address for address;
    

    event Auction_Created(uint256 _index);
    event Auction_BID(uint256 _index, address _bidder, uint256 amount);
    event ClaimTOTEM(uint256 auctionIndex, address claimer);
    event BurnTEM(uint256 auctionIndex);

    TotemToken public totemToken;
    TotemNFT public totemNFT;
    address public constant BURNADDRESS = 0x000000000000000000000000000000000000000d;

    constructor(TotemNFT _totemNFT, TotemToken _totemToken) public {
    totemNFT = _totemNFT; 
    totemToken = _totemToken;
    }

    enum Status { pending, active, finished }

    struct Auction {
        uint256 assetId;
        uint256 startTime;
        uint256 duration;
        uint256 currentBidAmount;
        address currentBidOwner;
        uint256 bidCount;
        bool claimedNFT;
    }
    Auction[] private auctions;

    function createAuction(uint256 _assetId,
                           uint256 _startPrice,
                           uint256 _startTime,
                           uint256 _duration) public onlyOwner returns (uint256) {

        require(totemNFT.ownerOf(_assetId) == msg.sender);
        require(totemNFT.getApproved(_assetId) == address(this));

        if (_startTime == 0) { _startTime = now; }

        Auction memory auction = Auction({
            assetId: _assetId,
            startTime: _startTime,
            duration: _duration,
            currentBidAmount: _startPrice,
            currentBidOwner: address(0),
            bidCount: 0,
            claimedNFT: false
        });
        auctions.push(auction);
        uint256 index = auctions.length.sub(1);

        emit Auction_Created(index);

        return index;
    }

    function bid(uint256 auctionIndex, uint256 amount) public returns (bool) {
        Auction storage auction = auctions[auctionIndex];
        require(isActive(auctionIndex));

        if (amount > auction.currentBidAmount) {
            // we got a better bid. Return tokens to the previous best bidder
            // and register the sender as `currentBidOwner`
            
            require(totemToken.transferFrom(msg.sender, address(this), amount));
            if (auction.currentBidOwner != address(0)) {
                // return funds to the previuos bidder
                if (totemNFT.totemOwnersNow() == 0) {
                totemToken.transfer(
                    auction.currentBidOwner,
                    auction.currentBidAmount
                );
                } else {  
                uint256 rFee = auction.currentBidAmount.div(100);
                uint256 rReturnAmount = auction.currentBidAmount.sub(rFee);
                totemToken.transfer(
                    auction.currentBidOwner,
                    rReturnAmount
                );
                }
            }
            // register new bidder
            auction.currentBidAmount = amount;
            auction.currentBidOwner = msg.sender;
            auction.bidCount = auction.bidCount.add(1);

            emit Auction_BID(auctionIndex, msg.sender, amount);
            return true;
        }
        return false;
    }

    function isClaimedNFT(uint256 auctionIndex) public view returns (bool) {
        return auctions[auctionIndex].claimedNFT;
    }

    function getTotalAuctions() public view returns (uint256) { return auctions.length; }

    function isActive(uint256 index) public view returns (bool) { return getStatus(index) == Status.active; }

    function isFinished(uint256 index) public view returns (bool) { return getStatus(index) == Status.finished; }

    function getStatus(uint256 index) public view returns (Status) {
        Auction storage auction = auctions[index];
        if (now < auction.startTime) {
            return Status.pending;
        } else if (now < auction.startTime.add(auction.duration)) {
            return Status.active;
        } else if (now >= auction.startTime.add(auction.duration) && auction.bidCount == 0) {
            return Status.active;    
        } else {
            return Status.finished;
        }
    }

    function getCurrentBidOwner(uint256 auctionIndex) public view returns (address) { return auctions[auctionIndex].currentBidOwner; }

    function getCurrentBidAmount(uint256 auctionIndex) public view returns (uint256) { return auctions[auctionIndex].currentBidAmount; }

    function getBidCount(uint256 auctionIndex) public view returns (uint256) { return auctions[auctionIndex].bidCount; }

    function getWinner(uint256 auctionIndex) public view returns (address) {
        require(isFinished(auctionIndex));
        return auctions[auctionIndex].currentBidOwner;
    }

    function getEndTime(uint256 auctionIndex) public view returns (uint256) {
        return auctions[auctionIndex].startTime.add(auctions[auctionIndex].duration);
    }

    function burntem(uint256 auctionIndex) public onlyOwner {
        require(isFinished(auctionIndex));
        Auction storage auction = auctions[auctionIndex];
        uint256 bFee = auction.currentBidAmount.div(100);
        uint256 bBurnAmount = auction.currentBidAmount.sub(bFee);
        require(totemToken.transfer(BURNADDRESS, bBurnAmount));

        emit BurnTEM(auctionIndex);
    }

    function claimtotem(uint256 auctionIndex) public {
        require(isFinished(auctionIndex));
        Auction storage auction = auctions[auctionIndex];

        address winner = getWinner(auctionIndex);
        require(winner == msg.sender);

        
        totemNFT.transferFrom(owner(), winner, auction.assetId);
        
        auction.claimedNFT = true;

        emit ClaimTOTEM(auctionIndex, winner);
    }

}