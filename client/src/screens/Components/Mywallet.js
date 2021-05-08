import React from 'react';
import right_arrow from '../../images/right_arrow.png';
import wallet from '../../images/wallet_white.png';

function Mywallet(){
    return(
        <div className="mywallet">

            <img src={wallet} />
            <p>My Wallet</p>
            <h4>$100,434.00</h4>
            <span>Total Currency</span>
            <div className="button" onClick={() => { alert("hi") }}>
                <span>View Details</span>
                <img src={right_arrow} alt="" />
            </div>
            <div className="back-image"></div>
        </div>
    )
}
export default Mywallet;