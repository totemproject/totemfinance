import React, { useContext, useState } from "react";
import { useActiveWeb3React } from "../../web3";
import { formatAddress, formatAmount } from "../../utils/format";
import { mainContext } from "../../reducer";
import { HANDLE_SHOW_CONNECT_MODAL } from "../../const";
import { Link, NavLink, useLocation } from "react-router-dom";

import { Logoicon, LogoSmallIcon } from "../../icons";
import { useTEMBalance, useAccountRewards } from "../../pages/Hooks";

export const Header = () => {
    const { active, account } = useActiveWeb3React();
    const { dispatch } = useContext(mainContext);

    const [showMenu, setShowMenu] = useState(false);
    const { temBalance } = useTEMBalance();
    const { accountRewards } = useAccountRewards();
    const location = useLocation();

    const handleMenuItemClick = () => {
        setShowMenu(false);
    }; 

    return (
        <header
            className={`header ${showMenu ? "menu-show" : ""}`}
            style={location.pathname === "/" ? { borderBottom: "transparent" } : {}}
        >
            <div className="center">
                <div className="header__box">
                    <Link to="/" className="header__logo">
                        <Logoicon />
                    </Link>

                    <Link
                        to="/"
                        className={`header__logo--small ${active ? "active" : ""}`}
                    >
                        <LogoSmallIcon />
                    </Link>

                    <div className="header__menu-wrapper">
                        <div className="header__menu">
                            <nav className="menu">
                                <ul className="menu__list">
                                
                             
                                    <li className="menu__item">
                                        <NavLink
                                            to="/home"
                                            className="menu__link"
                                            activeClassName="is-current"
                                            onClick={handleMenuItemClick}
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="menu__item">
                                        <NavLink
                                            to="/about"
                                            className="menu__link"
                                            activeClassName="is-current"
                                            onClick={handleMenuItemClick}
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                    <li className="menu__item">
                                        <NavLink
                                            to="/timeline"
                                            className="menu__link"
                                            activeClassName="is-current"
                                            onClick={handleMenuItemClick}
                                        >
                                            Timeline
                                        </NavLink>
                                    </li>
                                   
                                    <li className="menu__item">
                                        <NavLink
                                            to="/dashboard"
                                            className="menu__link"
                                            activeClassName="is-current"
                                            onClick={handleMenuItemClick}
                                        >
                                            Dashboard
                                        </NavLink>
                                    </li>
                                 
                            
                                </ul>
                            </nav>
                        </div>

                        {!active && (
                            <div className="header__btn">
                                <div className="buttonContainer">
                                    <button
                                        onClick={() => {
                                            dispatch({
                                                type: HANDLE_SHOW_CONNECT_MODAL,
                                                showConnectModal: true
                                            });
                                        }}
                                        className="btn"
                                        type="button"
                                        data-modal="recieve"
                                    >
                                        <span onClick={() => {}}>Connect to a Wallet</span>
                                    </button>
                                </div>
                            </div>
                        )}

                        {active && (
                            <div className="header-account">
                                <div className="balance">
                                    <p>{temBalance? formatAmount(temBalance): 0} TEM</p>
                                </div>
                                <div className="address">
                                    {formatAddress(account)}
                                    <div className="point"></div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>

                <div className="visible-md">
                    <button
                        className="button btn-menu-toggle"
                        type="button"
                        onClick={() => setShowMenu(prev => !prev)}
                    >
                        Menu
                    </button>
                </div>
            </div>
        </header>
    );
};
