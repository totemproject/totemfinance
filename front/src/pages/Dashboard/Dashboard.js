import React, { useContext, useState } from "react";
import { useActiveWeb3React } from "../../web3";
import { mainContext } from "../../reducer"; 
import {
    PoolsParticipated,
    PurchasedNFTs,
    Stats,
    MyTotemNFT
} from "./AccountRoutes";
import { AuctionPage } from "../Auction/AuctionPage"





    export const Dashboard = () => {
    
        const { active, account } = useActiveWeb3React();

        const [tab, setTab] = useState(1);
        
    
        if (!active) {
            
            return (
                <article className="about center">

                <br/>
                <br/>
               <center> <p>Wallet not connected</p></center>
                <br/>
                <br/>
                </article>
            )} else {
        
    
    
    
        return (
    
           
            
            <article className="center account">
              
          
    
         
                
               
                <div className="tabs">
                    <div className="tabs__nav">
    
                    <button
                            className={`tabs__btn button ${tab === 1 && "is-active"}`}
                            onClick={() => setTab(1)}
                        >
                            Auctions
                        </button>
                        <button
                            className={`tabs__btn button ${tab === 2 && "is-active"}`}
                            onClick={() => setTab(2)}
                        >
                            Stats
                        </button>
                   
                        
                       <button
                            className={`tabs__btn button ${tab === 3 && "is-active"}`}
                            onClick={() => setTab(3)}
                        >
                            My active bids
                        </button>
    
                        <button
                            className={`tabs__btn button ${tab === 4 && "is-active"}`}
                            onClick={() => setTab(4)}
                        >
                            Claim TOTEM
                        </button>
                        <button
                            className={`tabs__btn button ${tab === 5 && "is-active"}`}
                            onClick={() => setTab(5)}
                        >
                            My TOTEMS
                        </button>
                        
                    </div>
                </div> 
                {tab === 1 && <AuctionPage />}
                {tab === 2 && <Stats />}
                {tab === 3 && <PoolsParticipated />}          
                {tab === 4 && <PurchasedNFTs />}
                {tab === 5 && <MyTotemNFT />}
               
    
               
    
            </article>
        )
                    }
    };
    