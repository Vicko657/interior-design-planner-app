import React from "react";
import "./TopBar.css";
import Search from "./Search";
import ProfileIcon from "./ProfileIcon";
import Notifications from "./Notifications";
import SideHeader from "./SideHeader";
import SideBody from "./SideBody";
import SideFooter from "./SideFooter";
export default function TopBar() {
  return (
    <div className="navbar nav-topbar p-0">
      <div className="container-fluid pe-0">
        <div className="mobile-nav  justify-content-start ">
          <div className="d-lg-none d-flex">
            <a href="/user">
              <img className="user-logo m-1" src="/imgs/home-user-icon.svg" />
            </a>
            <div
              className="offcanvas offcanvas-start user-offcanvas p-0"
              data-bs-scroll="true"
              tabindex="-1"
              id="offcanvasScrolling"
              aria-labelledby="offcanvasScrollingLabel"
            >
              <div className="offcanvas-header p-0 ">
                <SideHeader />
                <button
                  type="button"
                  className="btn-close btn-close-white me-3"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body p-0">
                <SideBody />
                <SideFooter />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <div className="d-flex p-2">
            <Search />
            <Notifications />
          </div>
          <div className="d-flex topbar-profile m-0">
            <ProfileIcon />
          </div>
          <div className="d-flex topbar-menu d-lg-none d-flex m-0">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
            >
              <span className="navbar-toggler-icon align-content-center justify-content-center">
                <div className="navline mb-1"></div>
                <div className="navline"></div>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
