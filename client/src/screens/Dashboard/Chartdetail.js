import React, { useState} from 'react';
import send_arrow from '../../images/send_arrow.png';
import recieve_arrow from '../../images/recieve_arrow.png';
import TextField from "@material-ui/core/TextField";
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
import Switch from "react-switch";
import Toggle from './Toggle';
import exlink from '../../images/external-link.png';
import { NavLink } from 'react-router-dom';
import arrow_go from '../../images/arrow-go.svg';
import arrow_go_blue from '../../images/arrow-go-blue.svg';
import { Line } from 'react-chartjs-2';

const data = (canvas) => {
    const ctx = canvas.getContext("2d");

    let gradient = ctx.createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(1, "rgba(74, 224, 116, 0)");
    gradient.addColorStop(0, "rgba(74, 224, 116, 0.19)");
    return{
    labels: ['1H', '1D', '1W', '1M', '1Y', 'ALL'],
    datasets: [
      {
        label: 'dasdasd',
        data: [3, 5, 4, 10, 7, 15],
        fill: true,
        borderColor: '#4AE074',
        borderWidth: 1,
        backgroundColor: gradient,
      },
    ],
  }
};

  const options = {
        xAxes: [{
            ticks: { display: false },
            gridLines: {
                display: false,
                drawBorder: false
            }
        }],
        yAxes: [{
            ticks: { display: false },
            gridLines: {
                display: false,
                drawBorder: false
            }
        }]
      };
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
                        <NavLink className="prevlink" to="Dashboard" >Dashboard</NavLink><NavLink className="curruntlink" to="Chartdetail" ><img src={arrow_go}/>Chart Details</NavLink>
                    </div>
                    <Userprofile/>
                </div>
                <div className="content">
                    <div className="dashboard-container chart-container">
                        <div className="main">
                            <div className="charttop">
                                <div className="left">
                                    <img src={btc}/>
                                    <div className="left-inner">
                                        <p>Bitcoins (BTC)</p>
                                        <div>
                                            <h5>$54,805.00</h5>
                                            <span className="green">$ 345 (2.33%)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="right">
                                    <p>Price Alert</p>
                                    <Toggle/>
                                    <button className="buttonbuy">Buy</button>
                                </div>
                            </div>
                            <div className="chart">
                                <Line
                                data={data}
                                options={options}
                                />
                            </div>
                        </div>
                        <div className="recent-activity">
                            <div className="details">
                                <p className="title">About</p>
                                <p className="content">Bitcoin is a cryptocurrency and worldwise payment system. its is the first decenralized digital currency, as the system works without a central bank of single administrator.</p>
                            </div>
                            <div className="details">
                                <p className="title">Website</p>
                                <p className="content">bitcoin.org</p>
                            </div>
                            <div className="details">
                                <p className="title">Explorer</p>
                                <p className="content">blockchain.info</p>
                            </div>
                            <div className="details">
                                <p className="title">Market Cap</p>
                                <p className="content">$1,101,827,280,000.00</p>
                            </div>
                            <div className="details">
                                <p className="title">Circulating Supply</p>
                                <p className="content">18,668,636,000.00</p>
                            </div>
                            <a href="#" className="viewon">View on CoinGecko<img src={exlink}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;