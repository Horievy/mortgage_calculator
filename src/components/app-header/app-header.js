import React from 'react';
import { NavLink } from "react-router-dom";
import './app-header.css';

const AppHeader = () => {
  let activeClassName = "app-header-active";

  return (
    <div className="app-header d-flex">
      <h1>Mortgage Calculator</h1>
      <nav>
        <NavLink
         className={({ isActive }) =>
            isActive ? activeClassName : undefined} 
          to="/">Banks</NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? activeClassName : undefined} 
          to="/calculate">Calculate mortgage</NavLink>
      </nav>
      <div className="top-panel d-flex"></div>
    </div>
  );
};

export default AppHeader;
