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
import image from '../../images/image.png';
import './wallet.css';
import send_arrow from '../../images/send_arrow.png';
import recieve_arrow from '../../images/recieve_arrow.png';
import Recenthistory_minus from '../Components/Recenthistory_minus';
import Recenthistory_plus from '../Components/Recenthistory_plus';
import walletnew from '../../images/wallet-new1.png'
import { NavLink } from 'react-router-dom';
import arrow_go from '../../images/arrow-go.svg';
import arrow_go_blue from '../../images/arrow-go-blue.svg';
const Wallet = () => {
    return(
        <div className="body-container">
        <div className="main-container wallet-sidebar">
        <Sidebar/>
        <Sidebarmobile/>
            <div className="top-navigation">
                <div className="top-nav-left">
                    <NavLink to="Wallet" >Wallet</NavLink>
                </div>
                <Userprofile/>
            </div>
            <div className="content">
                <div className="wallet-container">
                    <div className="wallet-main">
                        <div className="total-currency">
                            <div className="total-count">
                                <p>$100, 434.00</p>
                                <span>Total Currency</span>
                            </div>
                            <img src={walletnew}/>
                        </div>
                        <div className="wallet-boxes">
                            <Currencies
                            Currencies="btc"
                            name="bitcoins"
                            currimg={btc}
                            count="$54, 805.00"
                            arrowimg={uparrow}
                            balanceup="$ 345 (2.33%)"
                            />
                            <Currencyactivate
                            Currencies="eth"
                            name="ethereum"
                            currimg={eth}
                            count="$1,847.30"
                            />
                            <Currencyactivate
                            Currencies="bnb"
                            name="binance coin"
                            currimg={bnb}
                            count="$307.87"
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
                        <div className="wallet-boxes">
                            <Currencyactivate
                            Currencies="ada"
                            name="cardano"
                            currimg={ada}
                            count="$184.54"
                            />
                            <Currencies
                            Currencies="algo"
                            name="Algorand"
                            currimg={algo}
                            count="$2074.37"
                            arrowimg={uparrow}
                            balanceup="$ 55 (5.21%)"
                            />
                            <Currencyactivate
                            Currencies="usdt erc20"
                            name="tetger USD"
                            currimg={usdt}
                            count="$301.65"
                            balance="$ 42 (0.33%)"
                            />
                            <Currencyactivate
                            Currencies="usdt trc20"
                            name="exchange tether USD"
                            currimg={usdt}
                            count="$19.00"
                            />
                        </div>
                        <div className="wallet-boxes">
                            <Currencies
                            Currencies="yfi"
                            name="cardano"
                            currimg={yfi}
                            count="$184.54"
                            arrowimg={uparrow}
                            balanceup="$ 14 (4.33%)"
                            />
                            <Currencyactivate
                            Currencies="xrp"
                            name="Algorand"
                            currimg={xrp}
                            count="$2074.37"

                            />
                            <Currencyactivate
                            Currencies="dot"
                            name="tetger USD"
                            currimg={dot}
                            count="$301.65"

                            />
                            <Currencyactivate
                            Currencies="trx"
                            name="exchange tether USD"
                            currimg={trx}
                            count="$19.00"

                            />
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