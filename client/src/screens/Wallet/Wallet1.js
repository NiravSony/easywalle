import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Sidebarmobile from '../Sidebar/Sidebarmobile';
import Userprofile from '../Components/Userprofile';
import btc from '../../images/btc.png';
import ada from '../../images/ada.png';
import algo from '../../images/algo.png';
import bnb from '../../images/bnb.png';
import doge from '../../images/doge.png';
import dot from '../../images/dot.png';
import eth from '../../images/eth.png';
import trx from '../../images/trx.png';
import usdt from '../../images/usdt.png';
import xrp from '../../images/xrp.png';
import yfi from '../../images/yfi.png';
import downarrow from '../../images/downarrow.png';
import uparrow from '../../images/uparrow.png';
import Currencyactivate from '../Components/Currencyactivate';
import Currencies from '../Components/Currency';
import send_arrow from '../../images/send_arrow.png';
import recieve_arrow from '../../images/recieve_arrow.png';
import Recenthistory_minus from '../Components/Recenthistory_minus';
import Recenthistory_plus from '../Components/Recenthistory_plus';
import walletnew from '../../images/wallet-new1.png';
import bill from '../../images/bill.png';
import { NavLink } from 'react-router-dom';
import arrow_go from '../../images/arrow-go.svg';
import arrow_go_blue from '../../images/arrow-go-blue.svg';
import './wallet.css';

const Wallet = () => {
    return(
        <div className="body-container">
        <div className="main-container">
        <Sidebar/>
        <Sidebarmobile/>
            <div className="top-navigation">
                <div className="top-nav-left">
                <NavLink className="prevlink" to="Wallet">Wallet</NavLink><NavLink className="curruntlink" to="Wallet1" ><img src={arrow_go}/>BTC Wallet</NavLink>
                </div>
                <Userprofile/>
            </div>
            <div className="content">
                <div className="wallet-container wallet1-container">
                    <div className="wallet-main">
                        <div className="total-currency">
                            <div className="total-count">
                                <p>2.00 BTC</p>
                                <span>= $109,805.00</span>
                            </div>
                            <img src={btc}/>
                        </div>
                        <div className="wallet1-button">
                            <button onClick={() => { alert("hi") }} className="buttonsend">Send</button>
                            <button onClick={() => { alert("hi") }} className="buttonreceive">Receive</button>
                            <button onClick={() => { alert("hi") }} className="buttonbuy">Buy</button>
                        </div>
                        <div className="convert-text">
                            <p>1 Bitcoin (BTC) = 59,261.35 United States  Dollar USD</p>
                        </div>
                        <div className="transaction-appear-here">
                            <img src={bill}/>
                            <p>Transactions will appear here</p>
                        </div>
                    </div>
                    <div className="wallet-right">
                        <div className="title">
                            <p>Recent Transactions</p>
                        </div>
                        <Recenthistory_plus
                            typeimg={send_arrow}
                            currimg={btc}
                            currtitle="Bitcoin"
                            hisdate="28 Mar 2021"
                            count="+ 0.0012 btc"
                        />
                        <Recenthistory_minus
                            typeimg={send_arrow}
                            currimg={eth}
                            currtitle="Ethereum"
                            hisdate="20 Mar 2021"
                            count="- 0.0012 eth"
                        />
                        <Recenthistory_plus
                            typeimg={recieve_arrow}
                            currimg={bnb}
                            currtitle="Binance coin"
                            hisdate="28 Feb 2021"
                            count="+ 0.05 bnb "
                        />
                        <Recenthistory_plus
                            typeimg={recieve_arrow}
                            currimg={ada}
                            currtitle="ADA"
                            hisdate="25 Feb 2021"
                            count="+ 1.05 ada"
                        />
                    </div>
                 </div>
            </div>
        </div>
    </div>
    );
};
export default Wallet;