import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Userprofile from '../Components/Userprofile';
import send_arrow from '../../images/send_arrow.png';
import recieve_arrow from '../../images/recieve_arrow.png';
import filter from '../../images/filter.svg';
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
import './transaction.css';
import downarrow from '../../images/downarrow.png';
import uparrow from '../../images/uparrow.png';
import Mywallet from '../Components/Mywallet';
import { NavLink } from 'react-router-dom';
import Sidebarmobile from '../Sidebar/Sidebarmobile';

function Transactions_receive(props){
    return(
        <div className="tran-his-row">
            <div className="tran-his-row-left">
                <img className="send-receive" src={props.send_receive} />
                <img className="trans-curr-img" src={props.trans_curr} />
                <p>{props.curr_name}</p>
            </div>
            <div className="tran-his-row-center">
                <p className="receive-his">{props.dbt_crdt}</p>
            </div>
            <div className="tran-his-row-right">
                <p>{props.tran_date}</p>
            </div>
        </div>
    )
}
function Transactions_send(props){
    return(
        <div className="tran-his-row">
            <div className="tran-his-row-left">
                <img className="send-receive" src={props.send_receive} />
                <img className="trans-curr-img" src={props.trans_curr} />
                <p>{props.curr_name}</p>
            </div>
            <div className="tran-his-row-center">
                <p className="send-his">{props.dbt_crdt}</p>
            </div>
            <div className="tran-his-row-right">
                <p>{props.tran_date}</p>
            </div>
        </div>
    )
}
function Transaction_popular_up(props){
    return(
        <div className="trans-curr-box">
            <div className="trans-curr-box-left">
                <img src={props.tran_curr_img}/>
                <div className="title">
                    <p>{props.tran_curr_title}</p>
                    <span>{props.tran_curr_name}</span>
                </div>
            </div>
            <div className="trans-curr-box-right">
                <p>{props.tran_curr_total}</p>
                <span className="up"><img src={props.tran_curr_updown_img}/>{props.updown_text}</span>
            </div>
        </div>
    )
}
function Transaction_popular_down(props){
    return(
        <div className="trans-curr-box">
            <div className="trans-curr-box-left">
                <img src={props.tran_curr_img}/>
                <div className="title">
                    <p>{props.tran_curr_title}</p>
                    <span>{props.tran_curr_name}</span>
                </div>
            </div>
            <div className="trans-curr-box-right">
                <p>{props.tran_curr_total}</p>
                <span className="down"><img src={props.tran_curr_updown_img}/>{props.updown_text}</span>
            </div>
        </div>
    )
}
const Transaction = () => {
    return(

<div className="body-container">
<div className="transaction main-container">
        <Sidebar/>
        <Sidebarmobile/>
        <div className="top-navigation">
        <div className="top-nav-left">
            <NavLink to="Transaction" >Transaction</NavLink>
        </div>
        <Userprofile/>
    </div>
    <div className="content">
        <div className="transaction-container">
            <div className="transaction-main">
                <div className="tran-filter-btn">
                    <span><img src={filter} />Filter</span>
                </div>
                <Transactions_receive
                send_receive={send_arrow}
                trans_curr={btc}
                curr_name="Bitcoin"
                dbt_crdt="+ 0.0012 BTC"
                tran_date="28 Mar 2021"
                />
                <Transactions_send
                send_receive={send_arrow}
                trans_curr={eth}
                curr_name="Ethereum"
                dbt_crdt="- 0.012 ETH"
                tran_date="20 Mar 2021"
                />
                <Transactions_receive
                send_receive={recieve_arrow}
                trans_curr={bnb}
                curr_name="Binance Coin"
                dbt_crdt="+ 0.05 BNB"
                tran_date="20 Feb 2021"
                />
                <Transactions_receive
                send_receive={recieve_arrow}
                trans_curr={ada}
                curr_name="ADA"
                dbt_crdt="+ 1.05 BNB"
                tran_date="25 Feb 2021"
                />
                <Transactions_receive
                send_receive={send_arrow}
                trans_curr={btc}
                curr_name="Bitcoin"
                dbt_crdt="+ 0.0012 BTC"
                tran_date="28 Mar 2021"
                />
                <Transactions_send
                send_receive={send_arrow}
                trans_curr={eth}
                curr_name="Ethereum"
                dbt_crdt="- 0.012 ETH"
                tran_date="20 Mar 2021"
                />
                <Transactions_receive
                send_receive={recieve_arrow}
                trans_curr={bnb}
                curr_name="Binance Coin"
                dbt_crdt="+ 0.05 BNB"
                tran_date="20 Feb 2021"
                />
                <Transactions_receive
                send_receive={recieve_arrow}
                trans_curr={ada}
                curr_name="ADA"
                dbt_crdt="+ 1.05 BNB"
                tran_date="25 Feb 2021"
                />
                <Transactions_receive
                send_receive={send_arrow}
                trans_curr={btc}
                curr_name="Bitcoin"
                dbt_crdt="+ 0.0012 BTC"
                tran_date="28 Mar 2021"
                />
                <Transactions_send
                send_receive={send_arrow}
                trans_curr={eth}
                curr_name="Ethereum"
                dbt_crdt="- 0.012 ETH"
                tran_date="20 Mar 2021"
                />
                <Transactions_receive
                send_receive={recieve_arrow}
                trans_curr={bnb}
                curr_name="Binance Coin"
                dbt_crdt="+ 0.05 BNB"
                tran_date="20 Feb 2021"
                />
                <Transactions_receive
                send_receive={recieve_arrow}
                trans_curr={ada}
                curr_name="ADA"
                dbt_crdt="+ 1.05 BNB"
                tran_date="25 Feb 2021"
                />
            </div>
            <div className="transaction-right">
                <Mywallet/>
                <div className="trans-heading">
                    <p>Popular Currencies</p>
                </div>
                <Transaction_popular_up
                tran_curr_img={btc}
                tran_curr_title="btc"
                tran_curr_name="Bitcoins"
                tran_curr_total="$54 ,805.00"
                tran_curr_updown_img={uparrow}
                updown_text="$ 345 (2.33%)"
                />
                <Transaction_popular_down
                tran_curr_img={eth}
                tran_curr_title="eth"
                tran_curr_name="Ethereum"
                tran_curr_total="$1 ,847.30"
                tran_curr_updown_img={downarrow}
                updown_text="$ 142 (0.33%)"
                />
                <Transaction_popular_up
                tran_curr_img={bnb}
                tran_curr_title="bnb"
                tran_curr_name="binance coin"
                tran_curr_total="$307.87"
                tran_curr_updown_img={uparrow}
                updown_text="$ 345 (2.33%)"
                />
            </div>
        </div>
    </div>
</div>
</div>
    );
};
export default Transaction;