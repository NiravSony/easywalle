import {React, Component } from 'react'
import Sidebar from '../Sidebar/Sidebar';
import Sidebarmobile from '../Sidebar/Sidebarmobile';
import Userprofile from '../Components/Userprofile';
import { NavLink } from 'react-router-dom';
import image from '../../images/image.png';
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
import info from '../../images/information.svg';
import Select from 'react-select'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './calculate.css';
const options = [
    { value: 'btc', label: <span style = {{ fontSize: "18px", fontWeight: "500"}}><img src={btc} width="16px" height="16px" style = {{ marginRight: "10px",marginTop: "-3px", fontSize: 20 }}/>Bitcoin</span>},
    { value: 'ada', label: <span style = {{ fontSize: "18px", fontWeight: "500"}}><img src={ada} width="16px" height="16px" style = {{ marginRight: "10px",marginTop: "-3px", fontSize: 20 }}/>Cardano</span>},
    { value: 'algo', label: <span style = {{ fontSize: "18px", fontWeight: "500"}}><img src={algo} width="16px" height="16px" style = {{ marginRight: "10px",marginTop: "-3px", fontSize: 20 }}/>Algorand</span>},
    { value: 'bnb', label: <span style = {{ fontSize: "18px", fontWeight: "500"}}><img src={bnb} width="16px" height="16px" style = {{ marginRight: "10px",marginTop: "-3px", fontSize: 20 }}/>Binance Coin</span>},
    { value: 'doge', label: <span style = {{ fontSize: "18px", fontWeight: "500"}}><img src={doge} width="16px" height="16px" style = {{ marginRight: "10px",marginTop: "-3px", fontSize: 20 }}/>Dogecoin</span>},
    { value: 'dot', label: <span style = {{ fontSize: "18px", fontWeight: "500"}}><img src={dot} width="16px" height="16px" style = {{ marginRight: "10px",marginTop: "-3px", fontSize: 20 }}/>Polkadot</span>},
    { value: 'eth', label: <span style = {{ fontSize: "18px", fontWeight: "500"}}><img src={eth} width="16px" height="16px" style = {{ marginRight: "10px",marginTop: "-3px", fontSize: 20 }}/>Ethereum</span>},
    { value: 'trx', label: <span style = {{ fontSize: "18px", fontWeight: "500"}}><img src={trx} width="16px" height="16px" style = {{ marginRight: "10px",marginTop: "-3px", fontSize: 20 }}/>Tron</span>},
    { value: 'usdt', label: <span style = {{ fontSize: "18px", fontWeight: "500"}}><img src={usdt} width="16px" height="16px" style = {{ marginRight: "10px",marginTop: "-3px", fontSize: 20 }}/>Tether USD</span>},
    { value: 'xrp', label: <span style = {{ fontSize: "18px", fontWeight: "500"}}><img src={xrp} width="16px" height="16px" style = {{ marginRight: "10px",marginTop: "-3px", fontSize: 20 }}/>XRP Ripple</span>},
    { value: 'yfi', label: <span style = {{ fontSize: "18px", fontWeight: "500"}}><img src={yfi} width="16px" height="16px" style = {{ marginRight: "10px",marginTop: "-3px", fontSize: 20 }}/>Yearn Finance</span>},
  ]
const Calculate = () => {
    return(
        <div className="body-container">
        <div className="main-container">
        <Sidebar/>
        <Sidebarmobile/>
            <div className="top-navigation">
                <div className="top-nav-left">
                    <NavLink to="Calculate" >Calculate</NavLink>
                </div>
                <Userprofile/>
            </div>
            <div className="content">
                <div className="calcualate-container">
                    <div className="calculate-box">
                    <Select options={options} />
                        <div className="select-type"><span>BTC / </span><span className="active"> USD</span></div>
                        <input type="text"/>
                        <p className="summary">Summary</p>
                        <div className="price">
                            <p className="title">BTC Price</p>
                            <p className="count">US$59,523.810</p>
                        </div>
                        <div className="yougot">
                            <p className="title" >You Got<img src={info}/></p>
                            <p className="count">~ 0.00336 BTC</p>
                        </div>
                        <button onClick={() => { alert("hi") }}>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    }
export default Calculate;