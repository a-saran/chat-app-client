import React from "react";
import closeIcon from "../../assets/power_off.png";
import "./style.css";

const Infobar = ({ room, toggleSideBar }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <div className="toggle-menu" onClick={toggleSideBar}>
        <div className='hamburger-icon' />
        <div className='hamburger-icon' />
        <div className='hamburger-icon' />
      </div>
      <span className='online'/>
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img src={closeIcon} alt="" className="close-icon" />
      </a>
    </div>
  </div>
);

export default Infobar;
