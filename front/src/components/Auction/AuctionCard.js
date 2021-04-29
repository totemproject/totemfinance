import React, {useEffect, useState} from "react";
import { Grow } from "@material-ui/core";

import { TotemModal, AuctionDetailsModal } from "../Modals";
import {getPoolLeftTime} from "../../utils/time";

export const AuctionCard = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [platformOpen, setPlatformOpen] = useState(false);
    const [left, setLeft] = useState()

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

    return (
        <>
            <Grow in={true} timeout={1500}>
                <div className="auction-list__item">
                    <a onClick={() => setPlatformOpen(true)} className="item__img">
                        <picture>
                            <img
                                src={item.image}
                                alt="`$`"
                                loading="lazy"
                                width="264"
                                height="170"
                            />
                        </picture>
                    </a>
                    <h2 className="item__title h3">{item.name}</h2>
                    <button
                        className={`item__type item__type--${item.status}`}
                        onClick={() => setIsOpen(true)}
                    >
                        {item.status}
                    </button>
                    <h5 className="item__workshop">
                        Token ID {item.tokenID}
                    </h5>
                    <div className="item__token">
                        <p className="item__token-title">{left && `${left.days}d : ${left.hours}h : ${left.minutes}m`}</p>
                        {/*<a href="/" className="item__token-address">*/}
                        {/*    {item.token}*/}
                        {/*</a>*/}
                    </div>
                </div>
            </Grow>

            {platformOpen && (
                <div className="modal-show">
                    <div className="wrapper">
                        <TotemModal
                            imgBig={item.image}
                            setIsOpen={setPlatformOpen}
                        />
                    </div>
                </div>
            )}

            {isOpen && (
                <div className="modal-show">
                    <div className="wrapper">
                        <AuctionDetailsModal item={item} setIsOpen={setIsOpen} />
                    </div>
                </div>
            )}
        </>
    );
};
