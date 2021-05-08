import React from 'react';
import logo from '../../images/logo.png';
import dashboard_icon from '../../images/dashboard_icon.png';
import transaction_icon from '../../images/transaction_icon.png';
import wallet_icon from '../../images/wallet_icon.png';
import calculate_icon from '../../images/calculate_icon.png';
import image from '../../images/image.png';
import right_arrow from '../../images/right_arrow.png';

import { NavLink } from 'react-router-dom';
import './sidebar.css'
const Sidebar = () => {
    return (

        <div className="sidebar">
            <div className="logo">
            <NavLink to="Dashboard">
                <img src={logo} alt="Logo" />
                <h1>Easy Wallet</h1>
            </NavLink>
            </div>
            <div className="menu">
                <div className="links">
                    <NavLink exact className="text active" activeClassName="active-button" to="Dashboard"><img src={dashboard_icon} alt="" />Dashboard</NavLink>
                </div>
                <div className="links">
                    <NavLink exact className="text" activeClassName="active-button" to="Transaction"><img src={transaction_icon} alt="" />Transaction</NavLink>
                </div>
                <div className="links">
                    <NavLink exact className="text" activeClassName="active-button" to="Wallet"><img src={wallet_icon} alt="" />Wallet</NavLink>
                </div>
                <div className="links">
                    <NavLink exact className="text" activeClassName="active-button" to="Calculate"><img src={calculate_icon} alt="" />Calculate</NavLink>
                </div>
            </div>
            <div className="active-wallet">
                <img src={image} alt="" />
                <h3>Unlock Wallets</h3>
                <p>Activate All Wallets in just 2 mins</p>
                <div className="button" onClick={() => { alert("hi") }}>
                    <span>Activate</span>
                    <img src={right_arrow} alt="" />
                </div>
            </div>
        </div>
    );
};
export default Sidebar;