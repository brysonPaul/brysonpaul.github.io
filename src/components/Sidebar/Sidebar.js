import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import SideNav, { Toggle, NavText, NavItem, NavIcon } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./Sidebar.css"

function Sidebar() {
  const [expanded, setExpanded] = useState(false); // Track the expanded state
  const navigate = useNavigate();
  let itemStyle = {
    paddingBottom: "20px",
  }
  let textTransitionStyle = {
    fontSize: "30px",
    paddingLeft:"50px",
    transition: expanded ? "margin-left 0.2s ease" : "none", // Only add transition when expanded
    marginLeft: expanded ? "20px" : "0",
  }
  return (
    <SideNav
      style={{ minWidth: expanded ? 300 : 56 }}
      onSelect={(selected) => {
        navigate('/' + selected);
      }}
      onToggle={() => {
        setTimeout(1000);
        setExpanded(!expanded);
      }}
      expanded={expanded}
      className="sidebar"
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="/">
        <NavItem eventKey="" style={{paddingTop: "20px",...(itemStyle || {})}} >
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: "2em"}}></i>
          </NavIcon>
          <NavText style={textTransitionStyle}>
            Home
          </NavText>
        </NavItem>

        <NavItem eventKey="about" style={itemStyle}>
          <NavIcon>
            <i className="fa fa-fw fa-info-circle" style={{ fontSize: "2em"}}></i>
          </NavIcon>
          <NavText style={textTransitionStyle}>About Me</NavText>
        </NavItem>

        <NavItem eventKey="experiences" style={itemStyle}>
          <NavIcon>
            <i className="fa fa-fw fa-file" style={{ fontSize: "2em" }}></i>
          </NavIcon>
          <NavText style={textTransitionStyle}>Experiences</NavText>
        </NavItem>
        
        <NavItem eventKey="projects" style={itemStyle}>
          <NavIcon>
            <i className="fa fa-fw fa-boxes-stacked" style={{ fontSize: "2em" }}></i>
          </NavIcon>
          <NavText style={textTransitionStyle}>Projects</NavText>
        </NavItem>

        <NavItem eventKey="keyboards" style={itemStyle}>
          <NavIcon>
            <i className="fa fa-fw fa-keyboard" style={{ fontSize: "2em" }}></i>
          </NavIcon>
          <NavText style={textTransitionStyle}>Keyboards</NavText>
        </NavItem>
        {/* Add similar NavItems for other sections */}
      </SideNav.Nav>
    </SideNav>
  );
}

export default Sidebar;
