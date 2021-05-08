import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Sidebarmobile from '../Sidebar/Sidebarmobile';
import Userprofile from '../Components/Userprofile';
import info from '../../images/information.svg';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import edit from '../../images/edit_icon.png';
import './profile.css';
import Profileimg from '../../images/profile_image.png';
import rightarrow from '../../images/right_arrow-black.png';
import { Redirect, useHistory } from "react-router-dom";

const Profile = () => {
    const history = useHistory();

    function Editform() {
        history.push("/Profileedit");
    }

    return(
        <div className="profile-container">
        <div className="main-container">
            <Sidebarmobile/>
            <div className="top-navigation">
                <div className="top-nav-left">
                <NavLink to="Dashboard" ><img src={logo}/>Easy Wallet</NavLink>
                </div>
                <Userprofile/>
            </div>
            <div className="content">
                <div className="profile-inner-container">
                    <div className="back">
                        <NavLink to="Dashboard"><img src={rightarrow}/>Back To Dashboard</NavLink>
                    </div>
                    <div className="profile-box">
                        <form>
                        <img src={Profileimg}/>
                        <h4>Wesley Garner</h4>
                        <div className="number">
                            <p>+91-9876543210</p>
                        </div>
                        <div className="name">
                            <TextField error = { false }
                            id = "outlined-helperText"
                            label = "First Name"
                            type = "Text"
                            defaultValue = "Wesley"
                            variant = "outlined"
                            disabled = "true"
                            />

                            <TextField error = { false }
                            id = "outlined-helperText"
                            label = "Last Name"
                            type = "Text"
                            defaultValue = "Garner"
                            variant = "outlined"
                            disabled = "true"
                            />
                        </div>
                        <TextField error = { false }
                        id = "outlined-helperText"
                        label = "Email"
                        type = "Email"
                        defaultValue = "demoaccount@gmial.com"
                        variant = "outlined"
                        disabled = "true"
                        />
                        <TextField error = { false }
                        id = "outlined-helperText"
                        label = "Password"
                        type = "Password"
                        defaultValue = "123456789"
                        variant = "outlined"
                        disabled = "true"
                        />
                        <input type="submit" value="Edit" onClick={() => {Editform();}}/>
                        </form>
                    </div>
                </div>
            </div>
         </div>
    </div>
    )
}
export default Profile;