import react from 'react';
import logo from "../../images/logo.png";
import login_image from "../../images/login_image.png";

const Welcome = () =>{
    return(
        <div className = "welcome">
            <div className="welcome-top">
            <div className="logo">
            <img src = { logo } alt = "Logo"/>
            </div>
            <text className = "weltext" > Welcome Back To </text>
            <text className = "appname" > Easy Wallet App </text>
            <text className = "desc" > CryptoCurrency Exchange Platform </text>
            </div>
            <img className="main-image" src = { login_image }/>
        </div>
    )
}
export default Welcome;