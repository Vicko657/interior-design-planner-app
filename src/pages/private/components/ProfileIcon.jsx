import React from "react";
import SVG from "../../../components/SVG";
import "./ProfileIcon.css";
export default function ProfileIcon() {
  return (
    <div className="nav-item dropdown m-0 p-0">
      <button
        id="dropdownMenu"
        className="nav-link p-0 m-0"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          className="user-profile-img"
          src="/imgs/placeholder-profile-img.png"
        />
      </button>
      <ul
        className="dropdown-menu dropdown-menu-end p-3 shadow-lg m-0"
        aria-labelledby="dropdownMenu"
      >
        <div className="d-flex column align-items-center justify-content-center">
          <div className="col-3 p-1">
            <img
              className="user-profile-img"
              src="/imgs/placeholder-profile-img_2.png"
              alt=""
            />
          </div>
          <div className="p-1">
            <li>
              <p className="dropdown-item user-name mb-auto ps-2">
                Victoria Olusegun
              </p>
            </li>
            <li>
              <p className="dropdown-item user-role mt-0 mb-0 ps-2">
                Interior Designer
              </p>
            </li>
          </div>
        </div>
        <hr />
        <li>
          <a className="dropdown-item">Account Details</a>
        </li>
        <li>
          <a className="dropdown-item">Settings</a>
        </li>
        <hr />
        <li>
          <a className="dropdown-item">Log Out</a>
        </li>
      </ul>
    </div>
  );
}
