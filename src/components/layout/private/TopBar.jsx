import React from "react";
import "./TopBar.css";
import Search from "./Search";
import ProfileIcon from "./ProfileIcon";
import Notifications from "./Notifications";
export default function TopBar() {
  return (
    <div className="navbar nav-topbar p-0">
      <div className="container-fluid pe-0">
        <div className="mobile-nav  justify-content-start ">
          <div className="d-lg-none d-flex">
            <a href="/user">
              <img className="user-logo m-1" src="/imgs/home-user-icon.svg" />
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <div className="d-flex p-2">
            <Search />
            <Notifications />
          </div>
          <div className="d-flex topbar-profile  m-0">
            <ProfileIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
