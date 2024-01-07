import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav, { Toggle, NavText, NavItem, NavIcon } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

function Sidebar() {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <div className="sidebar">
              <SideNav
                onSelect={(selected) => {
                  const to = '/' + selected;
                  // You may want to handle this navigation logic
                  // based on your routing strategy
                  console.log('Navigating to:', to);
                }}
                className="sidebar"
              >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="/">
                  <NavItem eventKey="/">
                    <NavIcon>
                      <i className="fa fa-fw fa-home" style={{ fontSize: "1.5em" }}></i>
                    </NavIcon>
                    <NavText style={{ fontSize: "15px" }}>Home</NavText>
                  </NavItem>
                  <NavItem eventKey="about-me">
                    <NavIcon>
                      <i className="fa fa-fw fa-info-circle" style={{ fontSize: "1.5em" }}></i>
                    </NavIcon>
                    <NavText style={{ fontSize: "15px" }}>About Me</NavText>
                  </NavItem>
                  <NavItem eventKey="experiences">
                    <NavIcon>
                      <i className="fa fa-fw fa-info-circle" style={{ fontSize: "1.5em" }}></i>
                    </NavIcon>
                    <NavText style={{ fontSize: "15px" }}>Experiences</NavText>
                  </NavItem>
                  <NavItem eventKey="projects">
                    <NavIcon>
                      <i className="fa fa-fw fa-info-circle" style={{ fontSize: "1.5em" }}></i>
                    </NavIcon>
                    <NavText style={{ fontSize: "15px" }}>Projects</NavText>
                  </NavItem>
                  <NavItem eventKey="keyboards">
                    <NavIcon>
                      <i className="fa fa-fw fa-info-circle" style={{ fontSize: "1.5em" }}></i>
                    </NavIcon>
                    <NavText style={{ fontSize: "15px" }}>Keyboards</NavText>
                  </NavItem>
                  {/* Add similar NavItems for other sections */}
                </SideNav.Nav>
              </SideNav>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default Sidebar;
