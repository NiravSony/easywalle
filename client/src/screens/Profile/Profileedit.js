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
import editimg from '../../images/camera.png';
const Profile = () => {
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
                <div className="profileedit-inner-container">
                    <div className="back">
                        <NavLink to="Dashboard"><img src={rightarrow}/>Back To Dashboard</NavLink>
                    </div>
                    <div className="profile-box">
                        <form>
                        <div className="profileimg">
                            <img src={Profileimg}/>
                            <div className="editimg">
                               <img src={editimg}/>
                            </div>
                        </div>
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
                            autocomplete = "off"
                            />

                            <TextField error = { false }
                            id = "outlined-helperText"
                            label = "Last Name"
                            type = "Text"
                            defaultValue = "Garner"
                            variant = "outlined"
                            autocomplete = "off"
                            />
                        </div>
                        <TextField error = { false }
                        id = "outlined-helperText"
                        label = "Email"
                        type = "Email"
                        defaultValue = "demoaccount@gmial.com"
                        variant = "outlined"
                        autocomplete = "off"
                        />
                        <TextField error = { false }
                        id = "outlined-helperText"
                        label = "Current Password"
                        type = "Password"
                        defaultValue = "123456789"
                        variant = "outlined"
                        />
                        <TextField error = { false }
                        id = "outlined-helperText"
                        label = "New Password"
                        type = "Password"
                        defaultValue = "123456789"
                        variant = "outlined"
                        />
                        <TextField error = { false }
                        id = "outlined-helperText"
                        label = "Confirm New Password"
                        type = "Password"
                        defaultValue = "123456789"
                        variant = "outlined"
                        />
                        <input type="submit" value="Save Changes" onClick={() => { alert("hi") }}/>
                        <input type="button" value="Cancel" onClick={() => { alert("hi") }}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    }
export default Profile;