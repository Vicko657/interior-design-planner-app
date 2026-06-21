import React from "react";
import "./SideNav.css";
import SideHeader from "./SideHeader";
import SideBody from "./SideBody";
import SideFooter from "./SideFooter";

export default function SideNav() {
  return (
    <div className="nav-sidebar flex-shrink-0 d-lg-block d-none">
      <SideHeader />
      <SideBody />
      <SideFooter />
    </div>
  );
}
