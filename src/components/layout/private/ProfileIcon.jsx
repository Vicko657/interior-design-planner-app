import { React, useEffect, useState } from "react";
import "./ProfileIcon.css";
import designerService from "../../../api/services/designerService";
import Button from "../../common/Button";
import { useAuth } from "../../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function ProfileIcon() {
  const { logout } = useAuth();
  const [profileData, setProfileData] = useState(true);
  const navigate = useNavigate();

  // Logs out user and navigates back to homepage
  const logoutUser = () => {
    logout();
    navigate("/home");
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await designerService.get();
        setProfileData(data);
      } catch (err) {
        const apiErrors = err.response?.data;
        return apiErrors;
      }
    };
    fetchProfile();
  }, []);

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
        className="dropdown-menu dropdown-menu-end shadow-lg m-0 p-0"
        aria-labelledby="dropdownMenu"
      >
        <div className="d-flex column align-items-center justify-content-center p-3">
          <div className="col-3 p-1">
            <img
              className="user-profile-img"
              src="/imgs/placeholder-profile-img_2.png"
              alt=""
            />
          </div>
          <div className="p-1 ps-2 text-start">
            <li>
              <p className="dropdown-item user-name mb-auto ps-2">
                {profileData?.name}
              </p>
            </li>
            <li>
              <p className="dropdown-item user-role mt-0 mb-0 ps-2">
                Interior Designer
              </p>
            </li>
          </div>
        </div>
        <hr className="m-0" />
        <li>
          <Link className="dropdown-item p-3 ps-4" to="profile">
            Profile
          </Link>
        </li>
        <hr className="m-0" />
        <li>
          <Link className="dropdown-item p-3 ps-4">Settings</Link>
        </li>
        <hr className="m-0" />
        <li>
          <a className="dropdown-item">
            <Button
              type="submit"
              colour=""
              text="LOG OUT"
              arrow="false"
              cn="p-3"
              btnfunction={logoutUser}
            ></Button>
          </a>
        </li>
      </ul>
    </div>
  );
}
