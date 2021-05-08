import React, {useState } from 'react';
import profile_image from '../../images/profile_image.png';
import arrow_down from '../../images/arrow_down.svg';
import logout_icon from '../../images/logout_icon.png';
import profile_icon from '../../images/profile_icon.png';
import { NavLink } from 'react-router-dom';
function Userprofile(props){

    const [isActive, setActive] = useState(true);

    const opendrop = () => {
        setActive(!isActive);
    };

    return(
        <div className="top-nav-right">
            <div className="name">
                <h3>Wesley Garner</h3>
                <p>My Profile</p>
            </div>
            <div className="profile-img">
                <img src={profile_image} alt=""/>
            </div>
            <div className="arrow-down" onClick={opendrop}>
                <div className = {`profile-option ${isActive ? '' : 'active'}`}>
                    <NavLink to="Profile"><img src={profile_icon} alt=""/>Profile</NavLink>
                    <NavLink to="login" ><img src={logout_icon} alt=""/>Logout</NavLink>
                </div>
            </div>
        </div>
    )
}
export default Userprofile;