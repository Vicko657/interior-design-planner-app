import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./MainNav.css";

export default function MainNav() {
  const path = useLocation().pathname;
  const location = path.split("/")[1];

  return (
    <nav
      className={`${location === "theviews" || location === "signin" || location === "signup" ? "dark" : "light"} navbar navbar-expand-lg p-2`}
    >
      <div className="container-fluid">
        <a className="navbar-brand navlogo logo" href="/">
          VIEW
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarOffcanvasLg"
          aria-controls="navbarOffcanvasLg"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon align-content-center justify-content-center">
            <div className="navline mb-1"></div>
            <div className="navline"></div>
          </span>
        </button>
        <div
          className="offcanvas offcanvas-start"
          tabIndex={"-1"}
          id="navbarOffcanvasLg"
          aria-labelledby="navbarOffcanvasLgLabel"
        >
          <div className="offcanvas-header">
            <a className="offcanvas-title logo" href="/">
              VIEW
            </a>
            <button
              className="btn-close btn-color"
              type="button"
              data-bs-dismiss="offcanvas"
              data-bs-target="#navbarOffcanvasLg"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1">
              <li className="nav-item">
                <NavLink className="nav-link active" to={"/"}>
                  HOME <span className="sr-only"></span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/about"}>
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/theviews"}>
                  THE VIEWS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/signin"}>
                  SIGN IN
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/signup"}>
                  SIGN UP
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
