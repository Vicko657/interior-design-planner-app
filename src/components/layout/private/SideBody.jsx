import React from "react";
import { NavLink } from "react-router-dom";
import SVG from "../../common/SVG";
export default function SideBody() {
  return (
    <div className="sidebar-body">
      <ul className="nav nav-pills nav-stacked flex-column mb-auto pt-3 pb-3">
        <small className="mb-1">OVERVIEW</small>
        <li className="">
          <NavLink className="nav-link side-link" to="dashboard">
            <SVG viewbox="0 0 20 20" path="dashboard" cn="me-3" />
            DASHBOARD <span className="sr-only"></span>
          </NavLink>
        </li>
        <small className="pt-4 mb-1">PROJECTS</small>
        <li className="">
          <NavLink className="nav-link side-link" to="projects">
            <SVG viewbox="0 0 20 20" path="all" cn="me-3 bi" />
            ALL
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link side-link" to="rooms">
            <SVG viewbox="0 0 14 18" path="rooms" cn="me-3 bi" />
            ROOMS
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link side-link" to="archived">
            <SVG viewbox="0 0 20 20" path="archived" cn="me-3 bi" />
            ARCHIVED
          </NavLink>
        </li>
        <small className="pt-4 mb-1">ORGANISE</small>
        <li className="nav-item">
          <NavLink className="nav-link side-link" to="calendar">
            <SVG viewbox="0 0 20 20" path="calendar" cn="me-3 bi" />
            CALENDAR
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link side-link" to="tasks">
            <SVG viewbox="0 0 19 19" path="tasks" cn="me-3 bi" />
            TASKS
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link side-link" to="upload">
            <SVG viewbox="0 0 20 20" path="files" cn="me-3 bi" />
            FILES
          </NavLink>
        </li>
        <small className="pt-4">BUDGET</small>
        <li className="nav-item">
          <NavLink className="nav-link side-link" to="inventory">
            <SVG viewbox="0 0 20 20" path="inventory" cn="me-3 bi" />
            INVENTORY
          </NavLink>
        </li>
        <small className="pt-4 mb-1">COLLABORATION</small>
        <li className="nav-item">
          <NavLink className="nav-link side-link" to="clients">
            <SVG viewbox="0 0 20 20" path="clients" cn="me-3 bi" />
            CLIENTS
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link side-link" to="inbox">
            <SVG viewbox="0 0 20 20" path="inbox" cn="me-3 bi" />
            INBOX
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
