import React from 'react'
export const HANDLE_WEB3_CONTEXT = "HANDLE_WEB3_CONTEXT";

export const HANDLE_MY_NFTS_MODAL = "HANDLE_MY_NFTS_MODAL";

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export const HANDLE_SHOW_CONNECT_MODAL = "HANDLE_SHOW_CONNECT_MODAL";
export const HANDLE_SHOW_FAILED_TRANSACTION_MODAL = "HANDLE_SHOW_FAILED_TRANSACTION_MODAL";
export const HANDLE_SHOW_WAITING_WALLET_CONFIRM_MODAL = "HANDLE_SHOW_WAITING_WALLET_CONFIRM_MODAL";

export const HANDLE_SHOW_TRANSACTION_MODAL = "HANDLE_SHOW_TRANSACTION_MODAL"

export const REQUESTING_DATA = "data query"

export const TOTEM_SELECT_WEB3_CONTEXT = "TOTEM_SELECT_WEB3_CONTEXT"

export const waitingForInit = {show: false, title: 'Waiting' ,content: '', link: null};


export const waitingForApprove = {show: true, title: 'Waiting for Approve' ,content: 'Approving spending limits on your wallet'}

export const waitingForConfirm = {show: true, title: 'Waiting For Confirmation' ,content: 'Confirm this transaction in your wallet'}

export const waitingPending = {show: true, title: 'Transaction submitted' ,content: 'View transaction'}
