import React, { useState } from "react";
import { Grow } from "@material-ui/core";

import { TotemModal, PurchasedDetailsModal } from "../Modals";
import {formatAmount} from "../../utils/format";

export const PurchasedCard = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [totemOpen, setTotemOpen] = useState(false);

    return (
        <>
            <Grow in={true} timeout={1500}>
                <div className="auction-list__item">
                    <a onClick={() => setTotemOpen(true)} className="item__img">
                        <picture>
                            <img
                                src={item.image}
                                alt={item.image}
                                loading="lazy"
                                width="264"
                                height="170"
                            />
                        </picture>
                    </a>
                    <h2 className="item__title h3">{item.name}</h2>
                    <button
                        type="button"
                        className="artwork-list__btn btn btn--gray"
                        onClick={() => setIsOpen(true)}
                    >
                        Token ID: {item.tokenID}
                    </button>
                    
                   
                    
                </div>
            </Grow>

            {totemOpen && (
                <div className="modal-show">
                    <div className="wrapper">
                        <TotemModal
                            imgBig={item.image}
                            setIsOpen={setTotemOpen}
                        />
                    </div>
                </div>
            )}

            {isOpen && (
                <div className="modal-show">
                    <div className="wrapper">
                        <PurchasedDetailsModal item={item} setIsOpen={setIsOpen} />
                    </div>
                </div>
            )}
        </>
    );
};
