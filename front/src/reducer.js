import React, {useReducer} from "react";
import {
  HANDLE_SHOW_CONNECT_MODAL,
  HANDLE_MY_NFTS_MODAL,
  HANDLE_WEB3_CONTEXT,
  HANDLE_SHOW_FAILED_TRANSACTION_MODAL,
  HANDLE_SHOW_WAITING_WALLET_CONFIRM_MODAL, HANDLE_SHOW_TRANSACTION_MODAL
} from "./const";

const mainContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case HANDLE_SHOW_CONNECT_MODAL:
      return {...state, showConnectModal: action.showConnectModal};
    case HANDLE_SHOW_FAILED_TRANSACTION_MODAL:
      return { ...state, showFailedTransactionModal: action.showFailedTransactionModal };
    case HANDLE_SHOW_WAITING_WALLET_CONFIRM_MODAL:
      return { ...state, showWaitingWalletConfirmModal: action.showWaitingWalletConfirmModal };
    case HANDLE_SHOW_TRANSACTION_MODAL:
      return { ...state, showTransactionModal: action.showTransactionModal };
    default:

      return state
  }
}

const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, {
    showConnectModal: false,
    showFailedTransactionModal: false,
    showWaitingWalletConfirmModal: {show:false, title: "", content: ""},
    showTransactionModal: false
  });
  return (
      <mainContext.Provider value={{state, dispatch}}>
        {props.children}
      </mainContext.Provider>
  );
};

export {reducer, mainContext, ContextProvider};
