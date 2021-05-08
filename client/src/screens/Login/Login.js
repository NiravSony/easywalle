import React, { Component, useState } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Redirect, useHistory } from "react-router-dom";
import Welcome from "../Components/Welcome";

const Login = () => {
    const [Remember, setRemember] = useState(false);

    const history = useHistory();

    function handleClick() {
        history.push("/Signup");
    }

    function ForgotPassword() {
        history.push("/ForgotPassword");
    }

    function handleChange(event) {
        setRemember(event.target.checked);
    }

    function DoLogin() {
        history.push("/Dashboard");
    }

    return (
        <div className="login-container">
        <div className="login-main">
            <Welcome/>
        <p className="title"> Login </p>
        <p>Enter Your Credentials </p>
        <span className="errortext">Incorrect Password, Please Try Again!</span>

        <TextField error = { false }
            id = "outlined-helperText"
            label = "Email"
            type = "Email"
            defaultValue = ""
            variant = "outlined"
            autocomplete = "off"
        />
        <TextField error = { false }
            id = "outlined-helperText"
            label = "Password"
            type = "Password"
            defaultValue = ""
            variant = "outlined"
        />
        <FormControlLabel
        control = { <Checkbox color = "primary" checked = { Remember } onChange = { handleChange } name = "checkedA" /> }
        label = { <text className="remember-me">Remember Me </text>}/>

        <div className="login-btn" onClick = {() => { DoLogin();}}>
        <text>Login</text>
        </div >

        <p className="forget-password" onClick = { ForgotPassword } >
        Forgot Password ?
        </p>

        <div style = { { marginTop: 0, display: "flex", flexDirection: "row" } } >
        <text style = {{color: "rgb(148,154,163)", marginTop: 15,fontSize: 17,}} >Don’ t have an account ? </text>
        <text onClick = { handleClick }
        style = {{color: "rgb(55,135,255)", marginTop: 15, marginLeft: 4, fontSize: 17,}} >Signup</text></div>

        </div>
        </div>
    );
};

export default Login;
