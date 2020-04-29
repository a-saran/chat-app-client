import React from "react";
import "./style.css";

import onlineIcon from "../../assets/onlineIcon.png";
import closeIcon from "../../assets/closeIcon.png";

const Infobar = ({ room, toggleSideBar }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <div className="toggle-menu" onClick={toggleSideBar}>
        <div className='hamburger-icon' />
        <div className='hamburger-icon' />
        <div className='hamburger-icon' />
      </div>
      <img src={onlineIcon} className="onlineIcon" alt="" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img src={closeIcon} alt="" />
      </a>
    </div>
  </div>
);

export default Infobar;
