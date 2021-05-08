import React, { useState } from 'react';
import logo from '../../images/logo.png';
import login_image from '../../images/login_image.png';
import './otp.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useHistory } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import Welcome from "../Components/Welcome";

const Otp = () => {

    const [otp, setotp] = useState('');

    const history = useHistory();

    function handleClick() {
        history.push("/Login")
    }

    function handleChange(otp) {
        setotp(otp)
    }


    return (

<>
<div className="login-container">
        <div className="login-main otp-main">
            <Welcome/>
                        <div className="back-btn" onClick={handleClick}>
                            <KeyboardBackspaceIcon style={{ color: 'rgb(55,135,255)', fontSize: 28 }} />
                            <text style={{ color: 'rgb(55,135,255)', fontSize: 14,}}>Back</text>
                        </div>

                        <text className="title">Enter OTP</text>
                        <text className="enterotp">Please Enter the OTP sent on *******210</text>

                        <OtpInput
                            value={otp}
                            onChange={handleChange}
                            numInputs={4}
                            focusStyle={{ borderBottomColor: 'rgb(55,135,255)' }}
                            inputStyle={{ width: 60, marginRight: 15, borderWidth: 0, borderBottomWidth: 2 }}
                            separator={<span></span>}
                        />
                        <div className="next-btn" onClick={() => { alert("hi") }}>
                            <text style={{ color: '#fff', fontSize: 20 }}>Next</text>
                        </div>
                        </div>
                        </div>

</>
    );
}

export default Otp;