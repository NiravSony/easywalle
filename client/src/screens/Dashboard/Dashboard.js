import React, { useState } from 'react';
import send_arrow from '../../images/send_arrow.png';
import recieve_arrow from '../../images/recieve_arrow.png';
import TextField from "@material-ui/core/TextField";
import image from '../../images/mywallet.png';
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
import right_arrow_blue from '../../images/right_arrow-blue.png';
import search from '../../images/search.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Userprofile from '../Components/Userprofile'
import './dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import Sidebarmobile from '../Sidebar/Sidebarmobile';
import { useHistory } from 'react-router-dom';
import Mywallet from '../Components/Mywallet';
import Currencies from '../Components/Currency';
import Recenthistory_minus from '../Components/Recenthistory_minus';
import Recenthistory_plus from '../Components/Recenthistory_plus';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    const history = useHistory();
    function handleClick() {
        history.push("/Signup")
    }

    return (
<>
        <div className="body-container">
            <div className="main-container">
                <Sidebar/>
                <Sidebarmobile/>
                <div className="top-navigation">
                    <div className="top-nav-left">
                        <NavLink to="Dashboard" >Dashboard</NavLink>
                    </div>
                    <Userprofile/>
                </div>
                <div className="content">
                    <div className="dashboard-container">
                        <div className="main">
                            <div className="hello">
                                <div className="text">
                                    <h3>Hello Wesley,</h3>
                                    <p>Get Updates of all your wallet here.</p>
                                   <div className="search">
                                       <img src={search}/>
                                       <input type="text" placeholder="Search" />
                                    </div>
                                </div>
                                <div className="image">
                                    <img src={image} />
                                </div>
                            </div>
                            <div className="pop-curr">
                                <div className="heading">
                                    <h4>Poppular Currencies</h4>
                                </div>
                                <div className="pop-curr-main">
                                        <Currencies
                                        Currencies="btc"
                                        name="bitcoins"
                                        currimg={btc}
                                        count="$54, 805.00"
                                        arrowimg={uparrow}
                                        balanceup="$ 345 (2.33%)"
                                        />
                                        <Currencies
                                        Currencies="eth"
                                        name="ethereum"
                                        currimg={eth}
                                        count="$1,847.30"
                                        arrowimg={downarrow}
                                        balancedown="$ 142(0.33%)"
                                        />
                                        <Currencies
                                        Currencies="bnb"
                                        name="binance coin"
                                        currimg={bnb}
                                        count="$307.87"
                                        arrowimg={uparrow}
                                        balanceup="$ 345 (2.33%)"
                                        />
                                        <Currencies
                                        Currencies="doge"
                                        name="Dogecoin"
                                        currimg={doge}
                                        count="$80.00"
                                        arrowimg={downarrow}
                                        balancedown="$ 142 (0.33%)"
                                        />
                                </div>
                                <div className="pop-curr-main">
                                        <Currencies
                                        Currencies="ada"
                                        name="cardano"
                                        currimg={ada}
                                        count="$184.54"
                                        arrowimg={uparrow}
                                        balanceup="$ 14 (4.33%)"
                                        />
                                        <Currencies
                                        Currencies="algo"
                                        name="Algorand"
                                        currimg={algo}
                                        count="$2074.37"
                                        arrowimg={uparrow}
                                        balanceup="$ 55 (5.21%)"
                                        />
                                        <Currencies
                                        Currencies="usdt erc20"
                                        name="tetger USD"
                                        currimg={usdt}
                                        count="$301.65"
                                        arrowimg={downarrow}
                                        balancedown="$ 42 (0.33%)"
                                        />
                                        <Currencies
                                        Currencies="usdt trc20"
                                        name="exchange tether USD"
                                        currimg={usdt}
                                        count="$19.00"
                                        arrowimg={uparrow}
                                        balanceup="$ 55 (5.21%)"
                                        />
                                </div>
                                <div className="pop-curr-main">
                                <Currencies
                                        Currencies="yfi"
                                        name="cardano"
                                        currimg={yfi}
                                        count="$184.54"
                                        arrowimg={uparrow}
                                        balanceup="$ 14 (4.33%)"
                                        />
                                        <Currencies
                                        Currencies="xrp"
                                        name="Algorand"
                                        currimg={xrp}
                                        count="$2074.37"
                                        arrowimg={downarrow}
                                        balancedown="$ 55 (5.21%)"
                                        />
                                        <Currencies
                                        Currencies="dot"
                                        name="tetger USD"
                                        currimg={dot}
                                        count="$301.65"
                                        arrowimg={downarrow}
                                        balancedown="$ 42 (0.33%)"
                                        />
                                        <Currencies
                                        Currencies="trx"
                                        name="exchange tether USD"
                                        currimg={trx}
                                        count="$19.00"
                                        arrowimg={downarrow}
                                        balancedown="$ 55 (5.21%)"
                                        />
                                </div>
                            </div>
                        </div>
                        <div className="recent-activity">
                            <Mywallet/>
                            <div className="recent-activity-history">
                                <div className="heading">
                                    <h4>Recent Activity</h4>
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
                            <div className="view-all-btn" onClick={() => { alert("hi") }}>Vew All Activities<img src={right_arrow_blue} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;