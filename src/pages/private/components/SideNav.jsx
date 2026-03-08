import React from "react";
import "./SideNav.css";
import { NavLink } from "react-router-dom";
import SVG from "../../../components/SVG";

export default function SideNav() {
  return (
    <div className="nav-sidebar flex-shrink-0">
      <div className="sidebar-header p-3 ">
        <a className="sidebar-title logo" href="/user">
          VIEW
        </a>
      </div>

      <div className="sidebar-body">
        <ul className="nav nav-pills nav-stacked flex-column mb-auto pt-3 pb-3">
          <small className="mb-1">DASHBOARD</small>
          <li className="">
            <NavLink className="nav-link side-link" to="overview">
              <SVG viewbox="0 0 20 20" path="overview-icon" cn="me-3 bi" />
              OVERVIEW <span className="sr-only"></span>
            </NavLink>
          </li>
          <small className="pt-4 mb-1">PROJECTS</small>
          <li className="">
            <NavLink className="nav-link side-link" to="projects">
              <SVG viewbox="0 0 20 20" path="rooms-icon" cn="me-3 bi" />
              ALL
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link side-link" to="rooms">
              <SVG viewbox="0 0 20 20" path="all-icon" cn="me-3 bi" />
              ROOMS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link side-link" to="archived">
              <SVG viewbox="0 0 20 20" path="archived-icon" cn="me-3 bi" />
              ARCHIVED
            </NavLink>
          </li>
          <small className="pt-4 mb-1">ORGANISE</small>
          <li className="nav-item">
            <NavLink className="nav-link side-link" to="calendar">
              <SVG viewbox="0 0 20 20" path="calendar-icon" cn="me-3 bi" />
              CALENDAR
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link side-link" to="tasks">
              <SVG viewbox="0 0 20 20" path="tasks-icon" cn="me-3 bi" />
              TASKS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link side-link" to="upload">
              <SVG viewbox="0 0 20 20" path="files-icon" cn="me-3 bi" />
              FILES
            </NavLink>
          </li>
          <small className="pt-4">BUDGET</small>
          <li className="nav-item">
            <NavLink className="nav-link side-link" to="list">
              <SVG viewbox="0 0 20 20" path="shoppinglist-icon" cn="me-3 bi" />
              SHOPPING LIST
            </NavLink>
          </li>
          <small className="pt-4 mb-1">COLLABORATION</small>
          <li className="nav-item">
            <NavLink className="nav-link side-link" to="clients">
              <SVG viewbox="0 0 20 20" path="clients-icon" cn="me-3 bi" />
              CLIENTS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link side-link" to="inbox">
              <SVG viewbox="0 0 20 20" path="inbox-icon" cn="me-3 bi" />
              INBOX
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="sidebar-footer d-flex mb-auto p-4">
        <p className="copyright">© VIEW 2026</p>
      </div>
    </div>
  );
}
