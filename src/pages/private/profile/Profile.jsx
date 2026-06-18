import { React, useEffect, useState } from "react";
import "./Profile.css";
import Button from "../../../components/common/Button";

export default function Profile() {
  return (
    <div className="container-fluid users-profile w-100 p-4">
      <div className="row g-2 row-cols-1 pt-4">
        <div className="col-lg-3 ps-4 col-2">
          <img className="user-profile-img" src="/imgs/default-profile.svg" />
        </div>
        <div className="col-lg-9 p-4 col-12">
          <h3 className="page-title pb-5">Profile</h3>
          <hr className="pb-3"></hr>
          <form method="PUT" className="row g-3 pt-3">
            <div className="col-md-6 mb-1">
              <label htmlFor="firstName" className="form-label">
                <small>FIRST NAME</small>
              </label>
              <input
                type="text"
                className="signup-form form-control"
                autoComplete="given-name"
                aria-describedby="firstNameError"
                id="firstName"
                name="firstName"
              />
            </div>
            <div className="col-md-6 mb-1">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="signup-form form-control"
                autoComplete="family-name"
                aria-describedby="lastnameError"
                id="lastName"
                name="lastName"
              />
            </div>
            <div className="col-md-6 mb-1">
              <label htmlFor="emailAddress" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="signup-form form-control"
                aria-describedby="emailError"
                autoComplete="email"
                id="emailAddress"
                name="emailAddress"
              />
            </div>
            <div className="col-md-6 mb-1">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                aria-describedby="phoneNumberError"
                className="signup-form form-control"
                autoComplete="mobile"
                id="phoneNumber"
                name="phoneNumber"
              />
            </div>
            <div className="mb-1">
              <label htmlFor="bio" className="form-label">
                Bio
              </label>
              <textarea
                type="text"
                className="signup-form form-control"
                aria-describedby="bioError"
                autoComplete="bio"
                id="bio"
                name="bio"
              />
            </div>
            <div className="col-md-6 mb-1">
              <label htmlFor="experience" className="form-label">
                Experience
              </label>
              <input
                type="text"
                className="signup-form form-control"
                autoComplete="new-password"
                id="experience"
                name="experience"
              />
            </div>
            <div className="col-md-6 mb-1 pb-3">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                className="signup-form form-control"
                autoComplete="new-password"
                id="location"
                name="location"
              />
            </div>
            <Button
              cn="col-lg-3 rounded-pill "
              colour="white-btn"
              text={"UPDATE PROFILE"}
              arrow="false"
              type="submit"
            ></Button>
          </form>
        </div>
      </div>
    </div>
  );
}
