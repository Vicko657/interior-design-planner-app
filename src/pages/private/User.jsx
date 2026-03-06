import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./User.css";
import SideNav from "./SideNav";

export default function User() {
  return (
    <div className="user-account d-flex flex-grow-1 overflow-hidden">
      {/*-- SideNav */}
      <SideNav />

      <div className="flex-grow-1 p-4 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
