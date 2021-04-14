import React from "react";
import { Link } from "react-router-dom";
import {useTOTEMsup, useTOTEMownersNow, useIsTOTEMowner, useTEMsup, useTEMBurned, useTotalFees, useAccountRewards} from "../../Hooks"
import { formatAddress, formatAmount } from "../../../utils/format";

export const Stats = () => {
    const { totemSup } = useTOTEMsup();
    const { totemOwnersNow } = useTOTEMownersNow();
    const { isTOTEMowner } = useIsTOTEMowner();
    const { temSup } = useTEMsup();
    const { temBurned } = useTEMBurned();
    const { totalFees } = useTotalFees();
    const { accountRewards } = useAccountRewards();

    

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
                              onClick={()=> window.open("https://etherscan.io/token/0x6655928F8137B5044d48Aa6D767028E69e81DF59", "_blank")   }
                             
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
                              onClick={()=> window.open("https://etherscan.io/token/0xae95dC56a480ba3B1830cB760B43633D3f87Aa17", "_blank")   }
                             
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
                              onClick={()=> window.open("https://etherscan.io/token/0xae95dC56a480ba3B1830cB760B43633D3f87Aa17?a=0x000000000000000000000000000000000000000d", "_blank")   }
                             
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
                        <th className="account-balance__title">
                            <div className="account-balance__unlock">
                                My received rewards
                            </div>
                        </th>
                        <td className="account-balance__value">{accountRewards? formatAmount(accountRewards): 0} TEM</td>
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
