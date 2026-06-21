import { NavLink } from "react-router-dom";
import SVG from "../../common/SVG";
export default function SideBody() {
  return (
    <div className="sidebar-body">
      <ul className="nav nav-pills nav-stacked flex-column mb-auto pt-3 pb-3">
        <small className="mb-1">OVERVIEW</small>
        <li className="">
          <NavLink className="nav-link side-link" to="dashboard">
            <SVG viewbox="0 0 20 20" path="overview-icon" cn="me-3 bi" />
            DASHBOARD <span className="sr-only"></span>
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
          <NavLink className="nav-link side-link" to="inventory">
            <SVG viewbox="0 0 20 20" path="shoppinglist-icon" cn="me-3 bi" />
            INVENTORY
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
  );
}
