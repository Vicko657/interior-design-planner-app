import React from "react";
import "./ProfileIcon.css";
import designers from "../../../data/designer";
import Button from "../../common/Button";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProfileIcon() {
  const designer = designers;

  const { logout } = useAuth();
  const navigate = useNavigate();

  // Logs out user and navigates back to homepage
  const logoutUser = () => {
    logout();
    navigate("/home");
  };

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
                {designer.fullName}
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
          <a className="dropdown-item p-1">
            <Button
              type="submit"
              colour="red-btn p-1"
              text="LOG OUT"
              arrow="false"
              btnfunction={logoutUser}
            ></Button>
          </a>
        </li>
      </ul>
    </div>
  );
}
