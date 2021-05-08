import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Sidebarmobile from '../Sidebar/Sidebarmobile';
import btc from '../../images/btc.png';
import {link} from 'react-router-dom';
import Userprofile from '../Components/Userprofile';
import downarrow from '../../images/downarrow.png';
import uparrow from '../../images/uparrow.png';
import dollarsymbol from '../../images/dollar-symbol.svg';
import bitcoin from '../../images/bitcoin.png';
import sendbox from '../../images/sendbox.png';
import { NavLink } from 'react-router-dom';
import arrow_go from '../../images/arrow-go.svg';
import arrow_go_blue from '../../images/arrow-go-blue.svg';
const Sendbtc = () => {
    return(
        <div className="body-container">
        <div className="main-container">
            <Sidebar/>
            <Sidebarmobile/>
            <div className="top-navigation">
                <div className="top-nav-left">
                <NavLink className="prevlink" to="Wallet">Wallet</NavLink><NavLink className="prevlink" to="Wallet1" ><img src={arrow_go_blue}/>BTC Wallet</NavLink><NavLink className="curruntlink" to="Sendbtc" ><img src={arrow_go}/>Send Currency</NavLink>
                </div>
                <Userprofile/>
            </div>
            <div className="content">
                <div className="sendbtc-container">
                    <div className="sendbtc-box">
                        <form>
                            <div className="topcontent ">
                                <div className="send-img">
                                    <img src={sendbox}/>
                                </div>
                                <p>Send Currency</p>
                            </div>
                            <div className="input">
                                <div className="symbol"><img src={bitcoin}/></div><input type="text"/>
                            </div>
                            <p classNames="input-bottom-text">Available BTC =<span>&nbsp; 0.00214</span></p>
                            <input className="entertocken" type="text" placeholder="Enter Tocken ID"/>
                            <input type="submit" value="Send" onClick={() => { alert("hi") }}/>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};
export default Sendbtc;