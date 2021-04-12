import React from "react";


import imageHead1 from "../assets/img/home/header/img--320x240.98581828.webp";
import imageHead2 from "../assets/img/home/header/img--320x240.9b29229b.jpg";
import imageHead3 from "../assets/img/home/header/img--1456x800.de4ea038.webp";
import imageHead4 from "../assets/img/home/header/img--728x400.037e419c.jpg";
import imageHead7 from "../assets/img/home/header/img--1380x623.67d85562.jpg";
import imageHead8 from "../assets/img/home/header/img--1456x800.58c248ea.jpg";
import imageHead9 from "../assets/img/home/header/img--2760x1246.1b689d0a.jpg";
import imageHead10 from "../assets/img/home/header/img--728x400.527e4fad.webp";

import image1 from "../assets/img/home/img.webp";
import image2 from "../assets/img/home/img@2x.webp";
import image3 from "../assets/img/home/img.png";
import image4 from "../assets/img/home/img@2x.png";


import {
    Intro
} from "./Dashboard/AccountRoutes";


export const HomePage = () => (
    

    <div className="wrapper__container">
        <div>
            <aside className="billboard">
                <div className="center">
                    <div className="billboard__box">
                        <div className="billboard__content">
                            <h1 className="billboard__title h1">
                                <span className="text-uppercase h1-main">
                                Don't let anybody touch your totem
                                </span>
                                <br />
                                
                                <span className="billboard__subtitle">
                                An elegant DeFi solution {" "}
                                    <span className="gold-color">reducing friction</span> of smart-contracts{" "}
                                    <span className="gold-color">interaction</span> using NFT
                                </span>
                            </h1>
                            <a
                                href="https://t.me/"
                                target="_blank"
                                className="btn btn--medium d-inline-block billboard__button"
                            >
                                Join Early Adopters
                            </a>
                        </div>
                        <picture>
                            <source
                                srcSet={`${imageHead1} 1x, ${imageHead1} 2x`}
                                type="image/webp"
                                media="(max-width: 360px)"
                            />
                            <source
                                srcSet={`${imageHead2} 1x, ${imageHead2} 2x`}
                                media="(max-width: 360px)"
                            />
                            <source
                                srcSet={`${imageHead10} 1x, ${imageHead3} 2x`}
                                type="image/webp"
                                media="(max-width: 768px)"
                            />
                            <source
                                srcSet={`${imageHead4} 1x, ${imageHead8} 2x`}
                                media="(max-width: 768px)"
                            />
                            {/* <source
                                srcSet={`${imageHead5} 1x, ${imageHead6} 2x`}
                                type="image/webp"
                            /> */}
                            <source srcSet={`${imageHead7} 1x, ${imageHead9} 2x`} />
                            <img
                                src={imageHead7}
                                width="1380"
                                height="623"
                                loading="lazy"
                                alt=""
                                className="billboard__img"
                            />
                        </picture>
                    </div>
                </div>
            </aside>
            <aside className="home-service">
                <div className="center">
                    <ul className="home-service__list">
                        <li className="home-service__item">
                            <a href="/workshop" className="home-service__ico">
                            <svg id="icon1" viewBox="0 0 140 140">
      <path id="box" fill="#CCCCCC" d="M71,31v-6h-2v6H20v4h4v61h21v3h24v4.4l-17.5,9.7l1,1.7l17.5-9.7l17.5,9.7l1-1.7L71,103.4V99h24v-3
                                       h21V35h4v-4H71z M93,97H71h-2H47v-4h46V97z M114,94H95v-3H45v3H26V35h88V94z"/>
      <g className="section3">
        <polygon fill="#CCCCCC" points="74,80 74,78 76,78 76,76 74,76 74,74 76,74 76,72 74,72 74,70 76,70 76,68 74,68 74,66 76,66 
                                        76,64 74,64 74,62 76,62 76,60 74,60 74,57 72,57 72,82 110,82 110,80" className="section3"/>
        <path fill="#CCCCCC" d="M84,72h-6v7h6V72z M82,77h-2v-3h2V77z" className="section3"/>
        <path fill="#CCCCCC" d="M92,67h-6v12h6V67z M90,77h-2v-8h2V77z" className="section3"/>
        <path fill="#CCCCCC" d="M100,65h-6v14h6V65z M98,77h-2V67h2V77z" className="section3"/>
        <path fill="#CCCCCC" d="M108,59h-6v20h6V59z M106,77h-2V61h2V77z" className="section3"/>
      </g>
      <g className="section2">
        <rect x="30" y="80" fill="#F4C510" width="36" height="2" className="section2"/>
        <rect x="30" y="72" fill="#F4C510" width="16" height="2" className="section2"/>
        <rect x="30" y="76" fill="#F4C510" width="16" height="2" className="section2"/>
        <rect x="50" y="72" fill="#F4C510" width="16" height="2" className="section2"/>
        <rect x="50" y="76" fill="#F4C510" width="16" height="2" className="section2"/>
        <path fill="#F4C510" d="M30,53v17h36V53H30z M64,68H32V55h32V68z" className="section2"/>
      </g>
      <g className="section1">
        <rect x="30" y="39" fill="#CCCCCC" width="67" height="2" className="section1"/>
        <rect x="30" y="43" fill="#CCCCCC" width="45" height="2" className="section1"/>
        <rect x="30" y="47" fill="#CCCCCC" width="49" height="2" className="section1"/>
      </g>
      <polygon id="stick" className="stick" fill="#F4C510" points="89.5,99.1 88.6,104.2 83.6,105 49,65.8 50.5,64.4 "/>
    </svg>
  
                            </a>
                            <h2 className="home-service__title h4">
                                Hold TOTEM NFT and earn TEM
                            </h2>
                            <p className="home-service__text">
                            
                            System works by applying a 1% fee for each TEM transaction and 
                            splitting this commission among all TOTEM NFT holders. You don't need to stake, hold TEM or spend any amount of gas for rewards to be delivered. Just hold TOTEM NFT and you will be awarded after each TEM transaction in the network immediately.
                            </p>
                        </li>
                        <li className="home-service__item">
                            <a href="/exhibition-hall" className="home-service__ico">
                            <svg id="icon3" viewBox="0 0 140 140">
      <path id="pen" className="pen" fill="#F4C510" d="M113.4,96l-5.9-5.9l-8.8-2l-2.8-14.1l-28.7-9.6l-3.7,3.7l9.6,28.7l14.1,2.8l2,8.8l3,3c0,0,0,0,0,0
                                                   s0,0,0,0l2.8,2.8L113.4,96z M95,111.6l-0.7-0.7l15.6-15.6l0.7,0.7L95,111.6z M65.8,68.7l0.3-0.3l14.2,14.2c-0.5,0.8-0.8,1.8-0.8,2.8
                                                   c0,1.3,0.5,2.6,1.5,3.5c0.9,0.9,2.2,1.5,3.5,1.5S87,89.9,88,89c0.9-0.9,1.5-2.2,1.5-3.5s-0.5-2.6-1.5-3.5c-0.9-0.9-2.2-1.5-3.5-1.5
                                                   c-1,0-1.9,0.3-2.8,0.8L67.5,67l0.3-0.3l26.4,8.8l2.6,13l-9.1,9.1l-13-2.6L65.8,68.7z M84.4,82.4c0.8,0,1.6,0.3,2.1,0.9
                                                   s0.9,1.3,0.9,2.1s-0.3,1.6-0.9,2.1c-1.1,1.1-3.1,1.1-4.2,0c-0.6-0.6-0.9-1.3-0.9-2.1s0.3-1.6,0.9-2.1S83.6,82.4,84.4,82.4z
                                                   M89.1,99.2l9.1-9.1l8.4,1.9l1.9,1.9l-15.6,15.6l-1.9-1.9L89.1,99.2z"/>
      <path id="line1" className="pen-line1" fill="#CCCCCC" d="M81.6,46v5c-16.9,0.5-30.5,14.1-31,31h-5v12h12V82h-5c0.5-15.7,13.2-28.5,29-29v5h12V46H81.6z
                                                           M55.6,92h-8v-8h8V92z M91.6,56h-8v-8h8V56z"/>
      <path id="line2" className="pen-line2" fill="#CCCCCC" d="M90.5,27.2c-0.8-0.8-1.8-1.2-2.8-1.2c-1.1,0-2.1,0.4-2.8,1.2c-0.8,0.8-1.2,1.8-1.2,2.8
                                                           c0,0.8,0.2,1.6,0.7,2.2l-22.5,25c-0.6-0.4-1.4-0.6-2.1-0.6c-1.2,0-2.3,0.5-3.1,1.3c-1.4,1.4-1.6,3.5-0.8,5.2L31.8,83.7
                                                           c-1.5-1-3.7-0.8-5,0.5c-0.8,0.8-1.2,1.8-1.2,2.8s0.4,2.1,1.2,2.8c0.8,0.8,1.8,1.2,2.8,1.2s2.1-0.4,2.8-1.2c0.8-0.8,1.2-1.8,1.2-2.8
                                                           c0-0.7-0.2-1.3-0.5-1.9L57,64.6c0.8,0.5,1.6,0.9,2.6,0.9c1.2,0,2.3-0.5,3.1-1.3c0.8-0.8,1.3-1.9,1.3-3.1c0-0.9-0.3-1.8-0.8-2.5
                                                           l22.5-24.9c0.6,0.3,1.2,0.5,1.8,0.5c1.1,0,2.1-0.4,2.8-1.2c0.8-0.8,1.2-1.8,1.2-2.8S91.2,27.9,90.5,27.2z M31,88.4
                                                           c-0.8,0.8-2.1,0.8-2.8,0c-0.4-0.4-0.6-0.9-0.6-1.4s0.2-1,0.6-1.4c0.4-0.4,0.9-0.6,1.4-0.6s1,0.2,1.4,0.6c0.4,0.4,0.6,0.9,0.6,1.4
                                                           S31.4,88,31,88.4z M89,31.4c-0.8,0.8-2.1,0.8-2.8,0c-0.4-0.4-0.6-0.9-0.6-1.4s0.2-1,0.6-1.4s0.9-0.6,1.4-0.6s1,0.2,1.4,0.6
                                                           s0.6,0.9,0.6,1.4S89.4,31,89,31.4z"/>
    </svg>
                            </a>
                            <h2 className="home-service__title h4">
                            TOTEM NFT Limited edition
                            </h2>
                            <p className="home-service__text">
                            Only 100 TOTEM will be released ever. It will be offered for sale through decentralized auctions. Each next TOTEM is more expensive than the previous one. Only TEM tokens accepted during the auction. All TEM used in the auction will be taken out of circulation via 'burning'. Each auction lasts for two days..
                            </p>
                        </li>
                        <li className="home-service__item">
                            <a href="/auction" className="home-service__ico">
                            
    <svg id="icon4" viewBox="0 0 140 140">
      <g id="line1" className="line1">
        <rect x="39" y="45" fill="#F4C510" width="9" height="2"/>
        <rect x="70" y="49" fill="#CCCCCC" width="11" height="2"/>
        <rect x="83" y="49" fill="#CCCCCC" width="16" height="2"/>
        <rect x="43" y="49" fill="#CCCCCC" width="25" height="2"/>
      </g>
      <g id="line2" className="line2">
        <rect x="90" y="53" fill="#CCCCCC" width="14" height="2"/>
        <rect x="63" y="53" fill="#CCCCCC" width="25" height="2"/>
        <rect x="43" y="53" fill="#CCCCCC" width="18" height="2"/>
        <rect x="57" y="57" fill="#CCCCCC" width="22" height="2"/>
        <rect x="43" y="57" fill="#CCCCCC" width="12" height="2"/>
      </g>
      <g id="line3" className="line3">
        <rect x="39" y="61" fill="#F4C510" width="9" height="2"/>
        <rect x="39" y="65" fill="#F4C510" width="15" height="2"/>
      </g>
      <g id="line4" className="line4">
        <rect x="46" y="69" fill="#CCCCCC" width="10" height="2"/>
        <rect x="58" y="69" fill="#CCCCCC" width="43" height="2"/>
        <rect x="103" y="69" fill="#CCCCCC" width="9" height="2"/>
        <rect x="78" y="73" fill="#CCCCCC" width="38" height="2"/>
        <rect x="52" y="73" fill="#CCCCCC" width="24" height="2"/>
      </g>
      <g id="line5" className="line5">
        <rect x="103" y="81" fill="#CCCCCC" width="13" height="2"/>
        <rect x="76" y="81" fill="#CCCCCC" width="25" height="2"/>
        <rect x="56" y="81" fill="#CCCCCC" width="18" height="2"/>
        <rect x="89" y="77" fill="#CCCCCC" width="10" height="2"/>
        <rect x="61" y="77" fill="#CCCCCC" width="26" height="2"/>
        <rect x="52" y="77" fill="#CCCCCC" width="7" height="2"/>
      </g>
      <g id="line6" className="line6">
        <rect x="46" y="89" fill="#CCCCCC" width="11" height="2"/>
        <rect x="52" y="85" fill="#CCCCCC" width="10" height="2"/>
        <rect x="64" y="85" fill="#CCCCCC" width="19" height="2"/>
        <rect x="85" y="85" fill="#CCCCCC" width="19" height="2"/>
        <rect x="59" y="89" fill="#CCCCCC" width="6" height="2"/>
      </g>
      <g id="computer">
        <path fill="#CCCCCC" d="M128,108H12V26h116V108z M14,106h112V28H14V106z"/>
        <path fill="#CCCCCC" d="M122,102H18V32h104V102z M20,100h100V34H20V100z"/>
        <rect x="20" y="34" fill="#F4C510" width="100" height="7"/>
        <path fill="#CCCCCC" d="M138,115H2v-9h136V115z M4,113h132v-5H4V113z"/>
        <circle fill="#FFFFFF" cx="24.5" cy="37.5" r="1.5"/>
        <circle fill="#FFFFFF" cx="29.5" cy="37.5" r="1.5"/>
        <circle fill="#FFFFFF" cx="34.5" cy="37.5" r="1.5"/>
        <rect x="20" y="41" fill="#F2F2F2" width="15" height="59"/>
        <path fill="#CCCCCC" d="M84,111H56v-5h28V111z M58,109h24v-1H58V109z"/>
        <circle fill="#CCCCCC" cx="72" cy="30" r="1"/>
      </g>
    </svg>
                            </a>
                            <h2 className="home-service__title h4">
                            Lend and Borrow. Next level
                            </h2>
                            <p className="home-service__text">
                            Borrow TEM using TOTEM stored in your wallet as collateral from Totem Finance smart pool or from other lenders. There is no need to return TEM what you borrowed, your TOTEM will do it for you. 5% Smart pool interest (in TEM tokens) will be burned after pool will received TEM back.
                            </p>
                        </li>
                    </ul>
                </div>
            </aside>
            <aside className="home-cards">
                <div className="center">
                    <div className="home-cards__box">
                        <div className="home-cards__item home-cards__token">
                            <h4 className="h3"> Mainnet stealth launched</h4>
                            <Intro />
          
               
                         
                        </div>
                        <div className="home-cards__item home-cards__first-workshop">
                        
        
                            <picture>
                                <source
                                    srcSet={`${image1} 1x, ${image2} 2x`}
                                    type="image/webp"
                                />
                                <source srcSet={`${image3} 1x, ${image4} 2x`} />
                                <img
                                    src={image3}
                                    width="226"
                                    height="341"
                                    loading="lazy"
                                    alt="First workshop"
                                    className="home-cards__img"
                                />
                            </picture>
                        </div>
                    </div>
                </div>
            </aside>
           <div>

           <ul className="timeline">


<li>
    <div className="direction-r">
        <div className="flag-wrapper">
            <span className="flag">Mainnet launch</span>
            <span className="time-wrapper"><span className="time">March 25, 2021</span></span>
        </div>
        <div className="desc">Running TEM / TOTEM. Etherscan smart-contracts public verification. </div>
    </div>
</li>

<li>
    <div className="direction-l">
        <div className="flag-wrapper">
            <span className="flag">Audit process</span>
            <span className="time-wrapper"><span className="time">March 25, 2021</span></span>
        </div>
        <div className="desc">Send the code and documentation for audit process</div>
    </div>
</li>

<li>
    <div className="direction-r">
        <div className="flag-wrapper">
            <span className="flag">Uniswap demo</span>
            <span className="time-wrapper"><span className="time">March 25, 2021</span></span>
        </div>
        <div className="desc">Listing with small liquidity from own funds for testing by early adopters
        </div>
    </div>
</li>


<li>
    <div className="direction-l">
        <div className="flag-wrapper">
            <span className="flag">Auction launch</span>
            <span className="time-wrapper"><span className="time">March 25, 2021</span></span>
        </div>
        <div className="desc">Launch Auction platform for TOTEM NFT selling</div>
    </div>
</li>

<li>
    <div className="direction-r">
        <div className="flag-wrapper">
            <span className="flag">Early promotion</span>
            <span className="time-wrapper"><span className="time">From March 25, 2021</span></span>
        </div>
        <div className="desc">Work with early adopters, social networks, medium articles, create community</div>
    </div>
</li>

<li>
    <div className="direction-l">
        <div className="flag-wrapper">
            <span className="flag">Liquidity GE</span>
            <span className="time-wrapper"><span className="time">April 8, 2021 - April 15,2021</span></span>
        </div>
        <div className="desc">Liquidity Generation Event. All collected ETH will be locked in Sushiswap liqudity pool forever through smart-contract</div>
    </div>
</li>

<li>
    <div className="direction-r">
        <div className="flag-wrapper">
            <span className="flag">Sushiswap listing</span>
            <span className="time-wrapper"><span className="time">April 16, 2021</span></span>
        </div>
        <div className="desc">Win win cooperation</div>
    </div>
</li>

<li>
    <div className="direction-l">
        <div className="flag-wrapper">
            <span className="flag">Listings, Marketing</span>
            <span className="time-wrapper"><span className="time">April 16 - Jul 26, 2021</span></span>
        </div>
        <div className="desc">CEX listings, marketing, PR, partnerships</div>
    </div>
</li>

<li>
    <div className="direction-r">
        <div className="flag-wrapper">
            <span className="flag">Lend and Borrow</span>
            <span className="time-wrapper"><span className="time">Jul 26, 2021</span></span>
        </div>
        <div className="desc">Lending and Borrowing will be awailable after 50% TOTEM NFT will be sold</div>
    </div>
</li>

</ul>


               </div>

        </div>
    </div>
);
