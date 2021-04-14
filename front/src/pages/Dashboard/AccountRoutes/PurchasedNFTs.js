import React from "react";


import { AuctionCard } from "../../../components/Auction";
import {useMyBiddenPool} from "../../Auction/Hooks";

export const PurchasedNFTs = () => {


    const {myBiddenPool} = useMyBiddenPool()



    return (
        <div className="tabs__item">
            <div className="auction-list">
                <div className="auction-list__list">
                    {myBiddenPool.filter(item => {return ((!item.ClaimedNFT) && item.isWin)}).map(item => (

                        <AuctionCard key={item.tokenID} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};
 