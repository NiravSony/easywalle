import React from 'react';

function Currencies(props){
    return(
        <div className="pop-curr-box">
            <div className="box-top">
                <div className="box-top-heading">
                    <h5>{props.Currencies}</h5>
                    <p>{props.name}</p>
                </div>
                <div className="box-top-img">
                    <img src={props.currimg}/>
                </div>
            </div>
            <div className="box-bottom">
                <p>{props.count}</p>
               <div className="box-bottom-count" ><img src={props.arrowimg}/><span className="balanceup">{props.balanceup}</span><span className="balancedown">{props.balancedown}</span></div>
            </div>
        </div>
    )
}
export default Currencies;