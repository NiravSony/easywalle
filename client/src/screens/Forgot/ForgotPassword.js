import React, { Component, useState } from 'react';
import logo from '../../images/logo.png';
import login_image from '../../images/login_image.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Redirect, useHistory } from 'react-router-dom';
import Welcome from "../Components/Welcome";

const ForgotPassword = () => {

    const [Remember, setRemember] = useState(false);
    const history = useHistory();
    function handleClick() {
        history.push("/Login")
    }


    return (
                <div className="login-container">
                    <div className="login-main forget-pswd">
                        <Welcome/>
                        <div className="back-btn" onClick={handleClick}>
                            <KeyboardBackspaceIcon style={{ color: 'rgb(55,135,255)', fontSize: 28 }} />
                            <text style={{ color: 'rgb(55,135,255)', fontSize: 14}}>Back</text>
                        </div>
                        <text className="title">Forgot Password</text>

                        <p className="content">Don’t worry, We’ll help you create a new one</p>
                        <TextField error = { false }
                            id = "outlined-helperText"
                            label = "Email"
                            type = "Email"
                            defaultValue = ""
                            variant = "outlined"
                            autocomplete = "off"
                        />

                        <div className="recover-btn" onClick={() => { alert("hi") }}>
                            <text>Recover</text>
                        </div>
                    </div>
                </div>

    );
}

export default ForgotPassword;