import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Sidebarmobile from '../Sidebar/Sidebarmobile';
import './buybitcoin.css';
import btc from '../../images/btc.png';
import {link} from 'react-router-dom';
import Userprofile from '../Components/Userprofile';
import { NavLink } from 'react-router-dom';
import downarrow from '../../images/downarrow.png';
import uparrow from '../../images/uparrow.png';
import dollarsymbol from '../../images/dollar-symbol.svg';
import arrow_go from '../../images/arrow-go.svg';
import arrow_go_blue from '../../images/arrow-go-blue.svg';
const Buybitcoin = () => {
    return(
        <div className="body-container">
        <div className="main-container">
            <Sidebar/>
            <Sidebarmobile/>
            <div className="top-navigation">
                <div className="top-nav-left">
                <NavLink className="prevlink" to="Dashboard" >Dashboard</NavLink><NavLink className="prevlink" to="Chartdetail" ><img src={arrow_go_blue}/>Chart Details</NavLink><NavLink className="curruntlink" to="Buybitcoin" ><img src={arrow_go}/>Buy BTC</NavLink>
                </div>
                <Userprofile/>
            </div>
            <div className="content">
                <div className="buybitcoin-container">
                    <div className="buybitcoin-box">
                        <form>
                            <div className="topcontent">
                                <img src={btc}/>
                                <h4>Bitcoines (BTC)</h4>
                                <p>$54,805.00</p>
                                <span className="green">$ 345 (2.33%)</span>
                            </div>
                            <div className="input">
                                <div className="symbol"><img src={dollarsymbol}/></div><input type="text"/>
                            </div>
                            <p classNames="input-bottom-text">~0.00214 BTC</p>
                            <input type="submit" value="Buy"/>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};
export default Buybitcoin;