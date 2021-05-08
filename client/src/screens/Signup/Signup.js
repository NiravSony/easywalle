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

import { Redirect, useHistory } from 'react-router-dom';

const Signup = () => {

    const [Check, setCheck] = useState(false);

    const history = useHistory();

    function handleClick() {
        history.push("/Login")
    }

    function handleChange(event) {
        setCheck(event.target.checked)
    };


    return (

        <div style={{ backgroundColor: 'white', width: '100vw', }}>

            <div className='row' style={{ marginLeft: 0, marginRight: 0 }}>

                <div className='col-md-4' style={{ padding: 0 }}>
                    <div style={{ flexDirection: 'column', alignItems: 'center', height: '100vh', display: 'flex', backgroundColor: 'rgb(55,135,255)' }} >

                        <img src={logo} alt="Logo" className="Logo" />
                        <text className="weltext">Welcome To</text>
                        <text className="appname">Easy Wallet App</text>
                        <text className="desc">CryptoCurrency Exchange Platform</text>

                        <img src={login_image} style={{ width: '350px', marginTop: 25 }} />

                    </div>
                </div>

                <div className='col-md-8' style={{ padding: 0 }}>
                    <div style={{ flexDirection: 'column', paddingLeft: 60, justifyContent: 'center', height: '100vh', display: 'flex', backgroundColor: 'rgb(255,255,255)' }} >

                        <text style={{ color: 'rgb(42,46,52)', fontSize: 34 }}>Signup</text>

                        <text style={{ color: 'rgb(148,154,163)', marginTop: 7, fontSize: 16 }}>Enter Your Details Below</text>

                        <div className='row' style={{ marginLeft: 0, width: '60%', marginRight: 0 }}>

                            <div className='col-md-6' style={{ width: '100%', marginTop: 25, padding: 0 }}>
                                <TextField
                                    error={false}
                                    style={{ width: '96%', height: 50, }}
                                    id="outlined-helperText"
                                    label="First Name"
                                    defaultValue=""
                                    variant="outlined"
                                />
                            </div>

                            <div className='col-md-6' style={{ width: '100%', marginTop: 25, display: 'flex', justifyContent: 'flex-end', padding: 0 }}>
                                <TextField
                                    error={false}
                                    style={{ width: '96%', height: 50 }}
                                    id="outlined-helperText"
                                    label="Last Name"
                                    defaultValue=""
                                    variant="outlined"
                                />
                            </div>

                        </div>

                        <TextField
                            error={false}
                            style={{ marginTop: 25, width: '60%', height: 50 }}
                            id="outlined-helperText"
                            type="number"
                            label="Phone No."
                            defaultValue=""
                            variant="outlined"
                        />

                        <TextField
                            error={false}
                            style={{ marginTop: 25, width: '60%', height: 50 }}
                            id="outlined-helperText"
                            label="Email ID"
                            defaultValue=""
                            variant="outlined"
                        />

                        <TextField
                            error={false}
                            style={{ marginTop: 25, width: '60%', backgroundColor: 'transparent', height: 50 }}
                            id="outlined-helperText"
                            label="Password"
                            type='password'
                            defaultValue=""
                            variant="outlined"
                        />

                        <FormControlLabel
                            style={{ width: 230, marginTop: 15 }}
                            control={
                                <Checkbox
                                    color="primary"
                                    checked={Check}
                                    onChange={handleChange} name="checkedA" />
                            }
                            label={<text style={{ color: 'rgb(148,154,163)', fontSize: 14 }}>I Accept Terms & Conditions</text>}
                        />

                        <div onClick={() => { alert("hi") }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginTop: 5, backgroundColor: 'rgb(55,135,255)', width: 150, height: 50 }}>
                            <text style={{ color: '#fff', fontSize: 20 }}>Signup</text>
                        </div>

                        <div style={{ marginTop: 25, display: 'flex', flexDirection: 'row', }}>
                            <text style={{ color: 'rgb(148,154,163)', fontSize: 17 }}>Already have an account?</text>

                            <text onClick={handleClick} style={{ color: 'rgb(55,135,255)', marginLeft: 4, fontSize: 17 }}>Login</text>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    );

}

export default Signup;