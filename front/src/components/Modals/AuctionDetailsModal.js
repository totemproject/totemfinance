import React, {useContext, useEffect, useState} from "react";
import Web3 from 'web3'
import {formatAddress, formatAmount, formatToAmount} from "../../utils/format";
import {useTEMBalance} from "../../pages/Hooks";
import { getPoolLeftTime} from "../../utils/time";
import {getContract, useActiveWeb3React} from "../../web3";
import TotemToken from "../../web3/contracts/TotemToken.json";
import TotemNFT from "../../web3/contracts/TotemNFT.json";
import {
  getTotemAuctionAddress,
  getTEMAddress,
  getTotemNFTAddress
} from "../../web3/address";
import {
  HANDLE_SHOW_FAILED_TRANSACTION_MODAL,
  HANDLE_SHOW_TRANSACTION_MODAL,
  HANDLE_SHOW_WAITING_WALLET_CONFIRM_MODAL,
  waitingForConfirm,
  waitingForInit,
  waitingPending
} from "../../const";
import TotemAuction from "../../web3/contracts/TotemAuction.json";
import {mainContext} from "../../reducer";
import {useBiddenStatus} from "../../pages/Auction/Hooks";



export const AuctionDetailsModal = ({item, setIsOpen}) => {

  const {active, account, library, chainId} = useActiveWeb3React()
  const {dispatch} = useContext(mainContext);
  const {bidden, biddenAmount, winner, claimed} = useBiddenStatus(item.index)
  const {temBalance} = useTEMBalance()
  const [left, setLeft] = useState()
  const [bidAmount, setBidAmount] = useState()

  let timer
  useEffect(() => {
    timer = setInterval(() => {
      const left = getPoolLeftTime(item.getEndTime)
      setLeft(left)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [getPoolLeftTime()])

  const onBid = async () => {
    console.log('on submit')
    if (!bidAmount) {
      return
    }
    const contract = getContract(library, TotemAuction.abi, getTotemAuctionAddress(chainId))
    const tokenContract = getContract(library, TotemToken.abi, getTEMAddress(chainId))

    console.log('bid_', '', formatToAmount(bidAmount))
    setIsOpen(false)
    try {
      dispatch({
        type: HANDLE_SHOW_WAITING_WALLET_CONFIRM_MODAL,
        showWaitingWalletConfirmModal: waitingForConfirm
      });
       await tokenContract.methods.approve(
           getTotemAuctionAddress(chainId),
          formatToAmount(bidAmount),
      )
          .send({from: account});

      dispatch({
        type: HANDLE_SHOW_WAITING_WALLET_CONFIRM_MODAL,
        showWaitingWalletConfirmModal: waitingForConfirm
      });

      await contract.methods.bid(item.index, formatToAmount(bidAmount))
          .send({from: account})
          .on('transactionHash', hash => {
            dispatch({
              type: HANDLE_SHOW_WAITING_WALLET_CONFIRM_MODAL,
              showWaitingWalletConfirmModal: {...waitingPending, hash}
            });
          })
          .on('receipt', (_, receipt) => {
            console.log('bid success')
            dispatch({
              type: HANDLE_SHOW_WAITING_WALLET_CONFIRM_MODAL,
              showWaitingWalletConfirmModal: waitingForInit
            });
            dispatch({
              type: HANDLE_SHOW_TRANSACTION_MODAL,
              showTransactionModal: true
            });
          })
          .on('error', (err, receipt) => {
            console.log('bid error', err)
            dispatch({
              type: HANDLE_SHOW_FAILED_TRANSACTION_MODAL,
              showFailedTransactionModal: true
            });
            dispatch({
              type: HANDLE_SHOW_WAITING_WALLET_CONFIRM_MODAL,
              showWaitingWalletConfirmModal: waitingForInit
            });
          })

    } catch (err) {
      dispatch({
        type: HANDLE_SHOW_WAITING_WALLET_CONFIRM_MODAL,
        showWaitingWalletConfirmModal: waitingForInit
      });
      if (err.code === 4001) {
        dispatch({
          type: HANDLE_SHOW_FAILED_TRANSACTION_MODAL,
          showFailedTransactionModal: true
        });
      } else {
        dispatch({
          type: HANDLE_SHOW_FAILED_TRANSACTION_MODAL,
          showFailedTransactionModal: true
        });
      }
      console.log('err', err);
    }
  };

  const onClaim = async () => {
    const contract = getContract(library, TotemAuction.abi, getTotemAuctionAddress(chainId))
    try {
      dispatch({
        type: HANDLE_SHOW_WAITING_WALLET_CONFIRM_MODAL,
        showWaitingWalletConfirmModal: waitingForConfirm
      });
      setIsOpen(false)
      contract.methods.claimtotem(item.index)
          .send({from: account})
          .on('transactionHash', hash => {
            dispatch({
              type: HANDLE_SHOW_WAITING_WALLET_CONFIRM_MODAL,
              showWaitingWalletConfirmModal: {...waitingPending, hash}
            });
          })
          .on('receipt', (_, receipt) => {
            console.log('claim success')
            dispatch({
              type: HANDLE_SHOW_WAITING_WALLET_CONFIRM_MODAL,
              showWaitingWalletConfirmModal: waitingForInit
            });
            dispatch({
              type: HANDLE_SHOW_TRANSACTION_MODAL,
              showTransactionModal: true
            });
          })
          .on('error', (err, receipt) => {
            console.log('claim error', err)
            dispatch({
              type: HANDLE_SHOW_FAILED_TRANSACTION_MODAL,
              showFailedTransactionModal: true
            });
            dispatch({
              type: HANDLE_SHOW_WAITING_WALLET_CONFIRM_MODAL,
              showWaitingWalletConfirmModal: waitingForInit
            });
          })

    } catch (err) {
      dispatch({
        type: HANDLE_SHOW_WAITING_WALLET_CONFIRM_MODAL,
        showWaitingWalletConfirmModal: waitingForInit
      });
      if (err.code === 4001) {
        dispatch({
          type: HANDLE_SHOW_FAILED_TRANSACTION_MODAL,
          showFailedTransactionModal: true
        });
      } else {
        dispatch({
          type: HANDLE_SHOW_FAILED_TRANSACTION_MODAL,
          showFailedTransactionModal: true
        });
      }
      console.log('err', err);
    }
  };


  const getUserBidInfo = () => {
    return (
        <>
          <hr/>
          <table className="form-vote__table auction-details__bid">
            <tbody>
            <tr>
              <th>Time left:</th>
              <td>{left && `${left.days}d : ${left.hours}h : ${left.minutes}m`}</td>
            </tr>
            <tr>
              <th>Bid counter:</th>
              <td>{item.bidcount}</td>
            </tr>
            <tr>
              <th>Current auction price:</th>
              <td>{formatAmount(item.currentPrice)} TEM</td>
            </tr>
            <tr>
              <th>Your current bid amount:</th>
              <td>{formatAmount(biddenAmount)} TEM</td>
            </tr>
            </tbody>
          </table>
       
        </>
    );
  };

  const getPurchaseStatus = () => {
    return (
        <>
          <hr/>
          <table className="form-vote__table auction-details__bid">
            <tbody>
            <tr>
              <th>The auction is closed:</th>
              <td>0d : 0h : 0m</td>
            </tr>
            <tr>
              <th>Bid counter:</th>
              <td>{item.bidcount}</td>
            </tr>
            <tr>
              <th>Current auction price:</th>
              <td>{formatAmount(item.currentPrice)} TEM</td>
            </tr>
            <tr>
              <th>Your current bid amount:</th>
              <td>{formatAmount(biddenAmount)} TEM</td>
            </tr>
            </tbody>
          </table>
          <hr/>
          {winner.toLowerCase() === account.toLowerCase() ? (
              <p className="auction-details__result result--green">Congrats, you are the winner!</p>
          ) : (
              <p className="auction-details__result result--red">Sorry, you have not purchased the item</p>
          )}
          <div className="form-app__submit">
            { !claimed && (
                <button
                    className="btn btn--medium modal__close"
                    type="button"
                    onClick={onClaim}
                >
                  {(winner.toLowerCase() === account.toLowerCase()) ? "Claim my NFT" : ""}
                </button>
            )}
          </div>
        </>
    );
  };




  const getFormForPurchase = () => {
    return (
        <>
          <hr/>
          <table className="form-vote__table auction-details__bid">
            <tbody>
            <tr>
              <th>Time left:</th>
              <td>{left && `${left.days}d : ${left.hours}h : ${left.minutes}m`}</td>
            </tr>
            <tr>
              <th>Bid counter:</th>
              <td>{item.bidcount}</td>
            </tr>
            <tr>
              <th>Current auction price:</th>
              <td>{formatAmount(item.currentPrice)} TEM</td>
            </tr>
            </tbody>
          </table>
          <hr/>
          <div className="auction__inputbox form-app__inputbox">
            <p className="form-app__label align-center opacity-60">
              Your Bid Amount
            </p>
            <div className="form-app__inputbox-control">
              <div className="form-app__inputbox-input">
                <input value={bidAmount} onChange={(e)=>{
                  setBidAmount(e.target.value)
                }} className="input" placeholder="0.0000"/>
              </div>
              <div className="form-app__inputbox-up">
                <div className="form-app__inputbox-up-pref" onClick={()=>{
                  console.log('on max',formatAmount(temBalance) )
                  setBidAmount(formatAmount(temBalance))
                }}>Max</div>
              </div>
            </div>
          </div>
          <p className="form-app__inputbox-after-text">
            Balance: {temBalance && formatAmount(temBalance)} TEM tokens
            <br/>
          </p>
          <div className="form-app__submit form-app__submit--row">
            <button
                className="btn btn--outline btn--medium"
                type="button"
                onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button
                type="button"
                className="btn btn--medium"
                onClick={onBid}
            >
              Confirm
            </button>
          </div>
        </>
    );
  };

  return (
      <div className="modal">
        <div className="modal__box">
          <div className="modal__item">
            <form
                className="form-vote-new form-app"
                action="/"
                noValidate="novalidate"
            >
              <div className="auction-details__title">
                <h3 className="modal__title h3">Auction Details</h3>
                <div
                    className={`auction-details__type auction-details__type--${item.type}`}
                >
                  {item.type}
                </div>
              </div>
              <div className="auction-details__image-wrapper">
                <div className="form-vote-new__img auction-details__image">
                  <picture>
                    <img
                        src={item.image}
                        alt=""
                        loading="lazy"
                        width="180"
                        height="115"
                    />
                  </picture>
                </div>
                <div className="auction-details__price">
                  <div>
                    <p>Name:</p>
                    <h4>{item.name}</h4>

                  </div>
                  <div>
                    <p>Role:</p>
                    <h4>{item.role}</h4>
                  </div>
                </div>
              </div>
              <table className="form-vote__table auction-details__table">
                <tbody>
                  <tr>
                  <th>Details:</th>
                  <td>
                    {item.description}
                  </td>
                </tr>
                <tr>
                  <th>Token ID:</th>
                  <td>{item.tokenID}</td>
                </tr>
                <tr>
                    <th>Contract address:</th>
                    <td className="table__token">
                        <a href={getTotemNFTAddress(chainId)} target="_blank">{formatAddress(getTotemNFTAddress(chainId))}</a>
                    </td>
                </tr>
                </tbody>
              </table>
          
           
              {(item.status === "live" && bidden) && getUserBidInfo()}

              {(item.status === "live" && !bidden) && getFormForPurchase()}

              {(item.status === "closed" && bidden) && getPurchaseStatus()}

            

              {item.status !== "live" && (
                  <div className="form-app__submit">
                    <button
                        className="btn btn--outline btn--medium modal__close"
                        type="button"
                        onClick={() => setIsOpen(false)}
                    >
                      OK
                    </button>
                  </div>
              )}
              {/*{ item.status === "live" ? (*/}
              {/*    userPurchasedItem ? (*/}
              {/*        getUserBidInfo()*/}
              {/*    ) : auctionIsFinished ? (*/}
              {/*        getPurchaseStatus()*/}
              {/*    ) : (*/}
              {/*        getFormForPurchase()*/}
              {/*    )*/}
              {/*) : (*/}
              {/*    <div className="form-app__submit">*/}
              {/*      <button*/}
              {/*          className="btn btn--outline btn--medium modal__close"*/}
              {/*          type="button"*/}
              {/*          onClick={() => setIsOpen(false)}*/}
              {/*      >*/}
              {/*        OK*/}
              {/*      </button>*/}
              {/*    </div>*/}
              {/*)}*/}
              <button
                  type="button"
                  className="modal__close modal__close-btn button"
                  aria-label="Close modal"
                  onClick={() => setIsOpen(false)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M14.5 10l7.39-7L24 5l-7.39 7L24 19l-2.11 2-7.39-7-7.39 7L5 19l7.39-7L5 5l2.11-2 7.39 7z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
  );
};
