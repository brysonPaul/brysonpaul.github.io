import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import SideNav, { Toggle, NavText, NavItem, NavIcon } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

function Sidebar() {
  const navigate = useNavigate();
  return (
              <SideNav
                onSelect={(selected)=> {
                  navigate('/'+selected);
                }}
                className="sidebar"
              >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="/home">
                  <NavItem eventKey="">
                    <NavIcon>
                      <i className="fa fa-fw fa-home" style={{ fontSize: "1.5em" }}></i>
                    </NavIcon>
                    <NavText style={{ fontSize: "15px" }}>Home</NavText>
                  </NavItem>
                  <NavItem eventKey="about">
                    <NavIcon>
                      <i className="fa fa-fw fa-info-circle" style={{ fontSize: "1.5em" }}></i>
                    </NavIcon>
                    <NavText style={{ fontSize: "15px" }}>About Me</NavText>
                  </NavItem>
                  <NavItem eventKey="experiences">
                    <NavIcon>
                      <i className="fa fa-fw fa-file" style={{ fontSize: "1.5em" }}></i>
                    </NavIcon>
                    <NavText style={{ fontSize: "15px" }}>Experiences</NavText>
                  </NavItem>
                  <NavItem eventKey="projects">
                    <NavIcon>
                      <i className="fa fa-fw fa-boxes-stacked" style={{ fontSize: "1.5em" }}></i>
                    </NavIcon>
                    <NavText style={{ fontSize: "15px" }}>Projects</NavText>
                  </NavItem>
                  <NavItem eventKey="keyboards">
                    <NavIcon>
                      <i className="fa fa-fw fa-keyboard" style={{ fontSize: "1.5em" }}></i>
                    </NavIcon>
                    <NavText style={{ fontSize: "15px" }}>Keyboards</NavText>
                  </NavItem>
                  {/* Add similar NavItems for other sections */}
                </SideNav.Nav>
              </SideNav>
  );
}

export default Sidebar;
