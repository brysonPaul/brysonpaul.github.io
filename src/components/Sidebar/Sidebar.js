import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <header>My app</header>
      <ul>
        <li><a href="#"><i className="fa-regular fa-address-card"></i>About me</a></li>
        <li><a href="#"><i className="fa-regular fa-file"></i>Experiences</a></li>
        <li><a href="#"><i className="fa-regular fa-clipboard"></i>Past Projects</a></li>
        <li><a href="#"><i className="fa-regular fa-keyboard"></i>Keyboards</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
