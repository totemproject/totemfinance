import React from "react";
import { Link } from "react-router-dom";
import {useTOTEMsup, useTEMsup, useTEMBurned, useTotalFees} from "../../Hooks"
import { formatAddress, formatAmount } from "../../../utils/format";

export const Intro = () => {
    const { totemSup } = useTOTEMsup();
  
    const { temSup } = useTEMsup();
    const { temBurned } = useTEMBurned();
    const { totalFees } = useTotalFees();
 

    

  return (
      <article className="center auction">
    
    <div className="tabs__item">
            <div className="account-balance">
                <table>
                    <tbody>
                    <tr>
                        <th colSpan="3" className="account-balance__head">
                            Total Supply:
                        </th>
                    </tr>
                    <tr>
                        <th className="account-balance__title">
                            <div className="account-balance__total">
                                Totem NFT:
                            </div>
                        </th>
                        <td className="account-balance__value"> { totemSup } TOTEM</td>
                        
                        <td className="account-balance__btn">
                          
                          <button
                              className="btn btn--border btn--small"
                              type="button"
                              onClick={()=> window.open("http://etherscan.io", "_blank")   }
                             
                          >
                              Etherscan
                          </button>
                     

                  </td>
                    </tr>

                    <tr>
                        <th className="account-balance__title">
                            <div className="account-balance__total">
                                TEM token:
                            </div>
                        </th>
                        <td className="account-balance__value"> {temSup? formatAmount(temSup): 0} TEM</td>
                        <td className="account-balance__btn">
                          
                          <button
                              className="btn btn--border btn--small"
                              type="button"
                              onClick={()=> window.open("http://etherscan.io", "_blank")   }
                             
                          >
                              Etherscan
                          </button>
                     

                  </td>
                  
                    </tr>

                    <tr>
                        <th className="account-balance__title">
                            <div className="account-balance__lock">
                                TEM burned:
                            </div>
                        </th>
                        <td className="account-balance__value"> {temBurned? formatAmount(temBurned): 0} TEM</td>
                        <td className="account-balance__btn">
                          
                          <button
                              className="btn btn--border btn--small"
                              type="button"
                              onClick={()=> window.open("http://etherscan.io", "_blank")   }
                             
                          >
                              Etherscan
                          </button>
                     

                  </td>
                    </tr>

                    <tr>
                        <td colSpan="3" className="account-balance__hr"></td>
                    </tr>


                    <tr>
                        <th colSpan="3" className="account-balance__head">
                            TEM Rewards
                        </th>
                    </tr>

                    <tr>
                        <th className="account-balance__title">
                            <div className="account-balance__unlock">
                                Total network fee
                            </div>
                        </th>
                        <td className="account-balance__value">{totalFees? formatAmount(totalFees): 0} TEM</td>

                        <td></td>
                    </tr>



                    <tr>
                        <td colSpan="3" className="account-balance__hr"></td>
                    </tr>

                    
                    </tbody>
                </table>

              

            </div>

        </div>
    

    
      </article>
  );
};
