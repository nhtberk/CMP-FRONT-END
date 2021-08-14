import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg ">
      <NavLink className="navbar-brand navbar-logo" to="/costumers" exact>
        Costumer Project Management
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="bi bi-list"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <div className="hori-selector"></div>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/costumers" exact>
              <i className="bi bi-person-circle"></i> Costumers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/costumersadd" exact>
              <i className="bi bi-plus-circle"></i> Costumers Add
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/costumersactive" exact>
              <i className="bi bi-check-circle"></i> Costumers Active
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/costumerspassive" exact>
              <i className="bi bi-check-circle-fill"></i> Costumers Passive
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              <i className="bi bi-box-arrow-right"></i> Log Out
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
