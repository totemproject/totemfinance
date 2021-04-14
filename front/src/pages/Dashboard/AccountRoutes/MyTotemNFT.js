import React from "react";


import { PurchasedCard } from "../../../components/Auction";
import {MyTotems} from "../Hooks";

export const MyTotemNFT = () => {

    const {totems} = MyTotems()

  

    return (
        <div className="tabs__item">
            <div className="auction-list">
                <div className="auction-list__list">
                {totems.map(item => (
                        <PurchasedCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

