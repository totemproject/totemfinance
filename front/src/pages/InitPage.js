import React, {useContext, useEffect} from 'react'
import {WalletConnect} from "../components/account/WalletConnect";
import {useWeb3React} from "@web3-react/core";
import {mainContext} from "../reducer";
import {
    FailedTransactionModal,
    WaitingWalletConfirmModal,
    TransactionModal
} from "../components/Modals";
import {TOTEM_SELECT_WEB3_CONTEXT} from "../const";
import {InjectedConnector} from "@web3-react/injected-connector";
import {WalletConnectConnector} from "@web3-react/walletconnect-connector";
import {LedgerConnector} from "@web3-react/ledger-connector";

const injected = new InjectedConnector({
    supportedChainIds: [1, 3]
});

const POLLING_INTERVAL = 12000;
const RPC_URLS = {
    1: "",
    3: "https://eth-ropsten.alchemyapi.io/v2/NaBuQVmVPQbB784i3I4-_pvCOoU7nnxL"
};

const walletconnect = new WalletConnectConnector({
    rpc: {1: RPC_URLS[1]},
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
    pollingInterval: POLLING_INTERVAL
});

const ledger = new LedgerConnector({
    chainId: 1,
    url: RPC_URLS[1],
    pollingInterval: POLLING_INTERVAL
});

const wallets = {
    MetaMask: injected,
    WalletConnect: walletconnect,
    Ledger: ledger
}

export const InitPage = () => {

    const context = useWeb3React();
    const {activate} = context;

    const { state } = useContext(mainContext);

    const {
        showConnectModal,
        showFailedTransactionModal,
        showWaitingWalletConfirmModal,
        showTransactionModal
    } = state;


    useEffect(() => {
        const localContent = window && window.localStorage.getItem(TOTEM_SELECT_WEB3_CONTEXT)
        console.log('wallet content', localContent)
        if (localContent) {
            console.log('activate', wallets[localContent])
            activate(wallets[localContent]);
        }
    }, [])

    return (
        <>
            {showConnectModal && (
                <div className="modal-show">
                    <div className="wrapper">
                        <WalletConnect/>
                    </div>
                </div>
            )}
            {showFailedTransactionModal && (
                <div className="modal-show">
                    <div className="wrapper">
                        <FailedTransactionModal />
                    </div>
                </div>
            )}
            {showWaitingWalletConfirmModal.show && (
                <div className="modal-show" style={{zIndex: 11}}>
                    <div className="wrapper" >
                        <WaitingWalletConfirmModal />
                    </div>
                </div>
            )}

            {showTransactionModal && (
                <div className="modal-show" style={{zIndex: 11}}>
                    <div className="wrapper" >
                        <TransactionModal />
                    </div>
                </div>
            )}

            </>

    )
}
