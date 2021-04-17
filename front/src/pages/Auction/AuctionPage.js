
import React, { useContext, useState } from "react";


import { AuctionCard } from "../../components/Auction";


import {usePolls} from "./Hooks"; 


export const AuctionPage = () => {

  const {pools} = usePolls();





return (
      <article className="center auction">

     

        <div className="auction-list">
          <div className="auction-list__list">
            {pools.map(item => (
                <AuctionCard key={item.tokenID} item={item} />
            ))}
          </div>
        </div>
      </article>
  )
          
};
 