import React from "react";

import image1 from "../assets/img/about/img.png";

export const AboutPage = () => (
    <article className="about center">
  
       

        <div className="about__body">
            
          <center>  
          <h1 className="account__title h3">Smart NFT in DeFi</h1>
           <p>
           <span className="gold-color">Totem NFT</span> redefines the concept of yield generation in Decentralized Finance (DeFi). One of the main problems in DeFi protocols is the ridiculously high cost of Gas at Ethereum network. Totem technologies reducing the friction of smart-contracts interaction using Non-fungible tokens (NFT).
Now users don’t need to spend Gas for Stake, Unstake, or Claim rewards. And don’t need to hold ERC20 tokens in the wallet to earn rewards.
                <br /> 

            </p></center>
            
            <p>
       <center> <span className="gold-color">“All you need to get rewards is to be the owner of one of the TOTEM. That’s it.”, -
Saito, dev.</span>
       </center> </p>
        <br/>
            <div className="about__img transparent">
           
           <img src={image1} width="697" height="507" loading="lazy" alt="" />
        </div><br />
       
        <p>
        There are two kinds of tokens in Totem ecosystem: TEM (fungible ERC20 tokens, Max supply: 4,316,539 TEM) and TOTEM (Non-fungible tokens, Max supply 100 TOTEM).
The system works by applying a 1% fee for each TEM transaction and splitting this commission among all current TOTEM NFT owners instantly.   
        </p> 

        <div className="about__btn">
                <a
                    target="_blank"
                    href="https://etherscan.io/token/0xae95dC56a480ba3B1830cB760B43633D3f87Aa17"
                >
                    TEM Etherscan
                </a>

                <a
                    target="_blank"
                    href="https://etherscan.io/token/0x6655928F8137B5044d48Aa6D767028E69e81DF59"
                >
                    TOTEM Etherscan
                </a>
             
            </div>
        
        <p className="home-cards__item">
        <h4>TOTEM smart rules</h4><br/>
Only 100 TOTEM will be released ever;<br/>
Each TOTEM will be offered for sale through decentralized auctions, one by one;<br/>
Only TEM tokens accepted to buy TOTEM during the auction;<br/>
All TEM tokens used in auctions will be burned;<br/>
Each TOTEM auction lasts for two days. If there are no one bids during the auction, it will be extended until the first bid placed;<br/>
Min. auction price for the first TOTEM is 500 TEM. Min. price for each next TOTEM will be 5% more expensive than the previous one;<br/>
To get TEM rewards you must be an owner of one of the TOTEM. All TOTEM owners receive an equal share of the total reward. If you have more than one TOTEM, you will receive the same part of the reward as the owner of one TOTEM. More TOTEMs do not mean more rewards;<br/>
After the 50th TOTEM will be distributed through auction, Smart pool for Lending and Borrowing will be launched.<br/>
<div className="about__btn">
                <a
                    
                    href="/dashboard"
                >
                    Auction Dashboard
                </a>
             
            </div>
        </p>    
        


<p>
        <h4>Lend and Borrow</h4>
        When 50th TOTEM will be distributed and min. 625,506 TEM will be burned, Users will be able to borrow TEM using TOTEM stored in their wallets as collateral from the smart pool. Max. available TEM amount for borrow for User will be an equivalent to the min. auction price when TOTEM was distributed. 5% Smart pool interest (in TEM tokens) will be burned after the pool will receive TEM back. There will be also an opportunity to lend any TEM amount p2p to other users and set your interest.
<br/><br /><span className="gold-color">“There is no need to return TEM what you borrowed, your TOTEM will do it for you”, - Saito, dev.</span>


</p>

<p className="home-cards__item">
<h4>SMART TOKENOMICS. TEM tokens distribution:</h4><br/>
+ Max supply: 4,316,539 TEM<br/>
+ ILO (Initial Liquidity Offering) allocation (Collected funds will be locked forever at Sushiswap liquidity pool): 1,305,012 TEM<br/>
+ Sushiswap liquidity locked: 1,305,012 TEM<br/>
+ Smart pool (liquidity locked for lending to TOTEM owners): 1,305,012 TEM<br/>
+ Marketing, team: 401,503 TEM (50% locked)<br/>



</p>

<p>
When all TOTEM will be distributed through auctions, min. 1,305,012 TEM will be taken out of circulation via “burning”. At smart pool locked 1,305,012 TEM until circulation tokens exist (any lent TEM will get back using TOTEM). So, there will be a max of 1,305,012 TEM (and part of 391,503 TEM — marketing, team funds) in circulation with locked liquidity after all TOTEMS will be sold. The smart pool will burn TEM from circulation via burning a 5% lending fee and will burn itself after circulation becomes insignificant.
<br/><br/>

</p>    


            
      
           
        </div>

      
    </article>
);
