import React, { useContext } from "react";
import Lottie from "react-lottie";
import {useHistory} from 'react-router-dom'
import { HANDLE_SHOW_WAITING_WALLET_CONFIRM_MODAL } from "../../const";
import { mainContext } from "../../reducer";
import loading from '../../assets/loading.json'
import { CrossModalIcon } from "../../icons";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

export const WaitingWalletConfirmModal = () => {
    const {history} = useHistory
    const { dispatch, state } = useContext(mainContext);
    const { showWaitingWalletConfirmModal } = state;

    // useEffect(() => {
    //     new modalLoader("canvas");
    // }, []);

    return (
        <div className="modal">
            <div className="modal__box">
                <div className="form-app">
                    <div className="form-app__inner transction-submitted">
                        <div className="transction-submitted__loading">
                            <Lottie width={200} height={200} options={defaultOptions}/>
                        </div>
                        <h3 className="form-app__title h3">
                            {showWaitingWalletConfirmModal.title}
                        </h3>
                        {showWaitingWalletConfirmModal.hash? (
                            <a target="_blank" href={`https://rinkeby.etherscan.io/tx/${showWaitingWalletConfirmModal.hash}`} className="transction-submitted__text">
                                {showWaitingWalletConfirmModal.content}
                            </a>
                        ) :(
                            <p className="transction-submitted__text">
                                {showWaitingWalletConfirmModal.content}
                            </p>
                        )}

                        <button
                            type="button"
                            className="form-app__close-btn button"
                            onClick={() => {
                                dispatch({
                                    type: HANDLE_SHOW_WAITING_WALLET_CONFIRM_MODAL,
                                    showWaitingWalletConfirmModal: {
                                        show: false,
                                        title: "",
                                        content: ""
                                    }
                                });
                            }}
                            aria-label="Close"
                        >
                            <CrossModalIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
