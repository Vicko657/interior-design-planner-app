import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./MainNav.css";

export default function MainNav() {
  const path = useLocation().pathname;
  const location = path.split("/")[1];

  return (
    <nav
      className={`${location === "theviews" || location === "signin" || location === "signup" ? "dark" : "light"} navbar navbar-expand-sm p-2`}
    >
      <div className="container">
        <a className="navbar-brand logo" href="/">
          VIEW
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/home">
                HOME <span className="sr-only"></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/theviews">
                THE VIEWS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signin">
                SIGN IN
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                SIGN UP
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
