pragma solidity ^0.6.2;

import "@openzeppelin/contracts/GSN/Context.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./TotemNFT.sol";


contract TotemToken is Context, IERC20, Ownable {
    using SafeMath for uint256;
    using Address for address;

    mapping (address => uint256) private _rewardsReceived;
    mapping (address => uint256) private _tokenOwned;
    mapping (address => mapping (address => uint256)) private _allowances;
   
    uint256 private constant _tokenTotal = 4316539 * 10**9;
    uint256 private _tFeeTotal;
    TotemNFT public totemNFT;

    string private _name = 'Totem';
    string private _symbol = 'TEM';
    uint8 private _decimals = 9;

    address public constant burnaddr = 0x000000000000000000000000000000000000000d;

    constructor (TotemNFT _totemNFT) public {
         totemNFT = _totemNFT; 
        _tokenOwned[_msgSender()] = _tokenTotal;

        emit Transfer(address(0), _msgSender(), _tokenTotal);
    }

    function name() public view returns (string memory) {
        return _name;
    }

    function symbol() public view returns (string memory) {
        return _symbol;
    }

    function decimals() public view returns (uint8) {
        return _decimals;
    }

     function balanceOf(address account) public view override returns (uint256) {
        return _tokenOwned[account];
    }

    function totalSupply() public view override returns (uint256) {
        uint256 burned = balanceOf(burnaddr);
        return _tokenTotal.sub(burned);
    }

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        _transfer(_msgSender(), recipient, amount);
        return true;
    }

    function allowance(address owner, address spender) public view override returns (uint256) {
        return _allowances[owner][spender];
    }

    function approve(address spender, uint256 amount) public override returns (bool) {
        _approve(_msgSender(), spender, amount);
        return true;
    }

    function transferFrom(address sender, address recipient, uint256 amount) public override returns (bool) {
        _transfer(sender, recipient, amount);
        _approve(sender, _msgSender(), _allowances[sender][_msgSender()].sub(amount, "ERC20: transfer amount exceeds allowance"));
        return true;
    }

    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        _approve(_msgSender(), spender, _allowances[_msgSender()][spender].add(addedValue));
        return true;
    }

    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        _approve(_msgSender(), spender, _allowances[_msgSender()][spender].sub(subtractedValue, "ERC20: decreased allowance below zero"));
        return true;
    }

    function accountRewards(address account) public view returns (uint256) {
        return  _rewardsReceived[account];
    }

    function totalFees() public view returns (uint256) {
        return _tFeeTotal;
    }

    function _approve(address owner, address spender, uint256 amount) private {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    function _transfer(address sender, address recipient, uint256 amount) private {
        require(sender != address(0), "ERC20: transfer from the zero address");
        require(recipient != address(0), "ERC20: transfer to the zero address");
        require(amount > 0, "Transfer amount must be greater than zero");
        if (sender == owner()) {
        _developtransfer(sender, recipient, amount);
        } else {
        _transferStandard(sender, recipient, amount);    
        }
    }

     function _developtransfer(address sender, address recipient, uint256 tAmount) private {
        _tokenOwned[sender] = _tokenOwned[sender].sub(tAmount);
        _tokenOwned[recipient] = _tokenOwned[recipient].add(tAmount); 
        emit Transfer(sender, recipient, tAmount);
        
    }

    function _transferStandard(address sender, address recipient, uint256 tAmount) private {
        (uint256 tTransferAmount, uint256 tFee) = _getValues(tAmount);
        _tokenOwned[sender] = _tokenOwned[sender].sub(tAmount);
        if (totemNFT.totemOwnersNow() == 0) {
            _tokenOwned[recipient] = _tokenOwned[recipient].add(tAmount); 
            emit Transfer(sender, recipient, tAmount);
        } else {
        _tokenOwned[recipient] = _tokenOwned[recipient].add(tTransferAmount);     
        _distFeeinRef(tFee, sender);
        emit Transfer(sender, recipient, tTransferAmount);
        }
    }

    function _distFeeinRef(uint256 tFee, address sender) private {
        uint256 share = tFee.div(totemNFT.totemOwnersNow());
        for (uint256 i = 0; i < totemNFT.totemOwnersNow(); i++) {
        _rewardsReceived[totemNFT.gettotemOwners(i)] = _rewardsReceived[totemNFT.gettotemOwners(i)].add(share);
        _tokenOwned[totemNFT.gettotemOwners(i)] = _tokenOwned[totemNFT.gettotemOwners(i)].add(share);
        emit Transfer(sender, totemNFT.gettotemOwners(i), share);
        }    
        _tFeeTotal = _tFeeTotal.add(tFee);
    }

    function _getValues(uint256 tAmount) private pure returns (uint256, uint256) {
        uint256 tFee = tAmount.div(100);
        uint256 tTransferAmount = tAmount.sub(tFee);
        return (tTransferAmount, tFee);
    }
}
