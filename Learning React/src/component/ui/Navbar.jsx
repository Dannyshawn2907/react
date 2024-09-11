import React from "react";
import logo from "../../assets/Logo.png";
import "../styles/Navbar.css";
import Icon from "../../assets/Icon.png";
import User from '../../assets/user.png'
import Search from '../../assets/Search.png'


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navs">
        <div className="img">
          <img src={logo} alt="" />
        </div>

        <div className=" loca">
          <h4>
            Deliver{" "}
            <span>
              {" "}
              <img src={Icon} alt="" />
            </span>{" "}
            Curent Locatoin Mohammadpur Bus Stand, Dhaka
          </h4>
        </div>

        <div className="user"> 
          <p><img src={Search} alt="" />Search food</p>
          <p className="login"><img src={User} alt="" />login</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
