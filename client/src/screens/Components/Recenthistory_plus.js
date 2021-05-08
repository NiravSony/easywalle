import React from 'react';

    function Recenthistory_plus(props){
        return(
            <div className="history-list">
        <div className="history-box">
            <div className="history-left">
                <img className="type" src={props.typeimg}/>
                <img className="hist-curr-img" src={props.currimg} />
                <div className="history-date">
                    <p className="hist-curr-title">{props.currtitle}</p>
                    <span className="hist-curr-date">{props.hisdate}</span>
                </div>
                </div>
            <p className="plus">{props.count}</p>
        </div>
    </div>
    )
}
export default Recenthistory_plus;