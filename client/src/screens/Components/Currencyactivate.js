import React from 'react';

function Currencyactivate(props){
    return(
        <div className="pop-curr-box activate">
            <div className="box-top">
                <div className="box-top-heading">
                    <h5>{props.Currencies}</h5>
                    <p>{props.name}</p>
                </div>
                <div className="box-top-img">
                    <img src={props.currimg}/>
                </div>
            </div>
            <div className="box-bottom-btn" onClick={() => { alert("hi") }}>
                <p>Activate</p>
            </div>
        </div>
    )
}
export default Currencyactivate;