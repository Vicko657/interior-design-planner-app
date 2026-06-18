import { React, useEffect, useState } from "react";
import designerService from "../../../api/services/designerService";
import "./Profile.css";
import Button from "../../../components/common/Button";
import { useForm } from "react-hook-form";
import useFetch from "../../../hooks/useFetch";
import Loader from "../../../components/common/Loader";
import Error from "../../../components/common/Error";

export default function Profile() {
  const { data, loading, error } = useFetch(designerService.get);
  const [profileData, setProfileData] = useState(null);
  const [apiError, setApiError] = useState(null);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    setError,
  } = useForm();

  // Fetch designers profile data
  (useEffect(() => {
    if (data) {
      setProfileData(data);
    }
  }),
    [data]);

  // Handles updated fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Update designers profile data
  const onSubmit = async (response) => {
    try {
      setApiError(null);
      await designerService.update(response);
    } catch (err) {
      const apiErrors = err.response?.data;
      if (apiErrors && typeof apiErrors === "object") {
        Object.keys(apiErrors).forEach((field) => {
          setError(field, { type: "server", message: apiErrors[field] });
        });
      } else {
        setApiError(apiErrors || "Profile update failed");
      }
    }
  };

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  return (
    <div className="container-fluid users-profile w-100 p-4">
      <div className="row g-2 row-cols-1 pt-4">
        <div className="col-lg-3 ps-4 col-2">
          <img
            className="user-profile-img d-lg-block d-none"
            src="/imgs/default-profile.svg"
          />
        </div>
        <div className="col-lg-9 p-4 col-12">
          <img
            className="user-profile-img d-lg-none d-block pb-3 mx-auto"
            src="/imgs/default-profile.svg"
          />
          <h3 className="page-title pb-lg-5 pb-3 text-center text-lg-start">
            Profile
          </h3>
          <hr className="pb-3"></hr>
          <form
            method="PUT"
            className="row g-3 pt-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            {apiError && <div className="alert alert-danger">{apiError}</div>}

            <div className="col-md-6 mb-1">
              <label htmlFor="firstName" className="form-label">
                <small>FIRST NAME</small>
              </label>
              <input
                {...register("firstName")}
                type="text"
                className="signup-form form-control"
                autoComplete="given-name"
                aria-describedby="firstNameError"
                id="firstName"
                name="firstName"
                value={profileData?.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <small className="text-warning text-sm">
                  {errors.firstName.message}
                </small>
              )}
            </div>
            <div className="col-md-6 mb-1">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                {...register("lastName")}
                type="text"
                className="signup-form form-control"
                autoComplete="family-name"
                aria-describedby="lastnameError"
                id="lastName"
                name="lastName"
                value={profileData?.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <small className="text-warning text-sm">
                  {errors.lastName.message}
                </small>
              )}
            </div>
            <div className="col-md-6 mb-1">
              <label htmlFor="emailAddress" className="form-label">
                Email Address
              </label>
              <input
                {...register("emailAddress")}
                type="email"
                className="signup-form form-control"
                aria-describedby="emailError"
                autoComplete="email"
                id="emailAddress"
                name="emailAddress"
                value={profileData?.emailAddress}
                onChange={handleChange}
              />
              {errors.emailAddress && (
                <small className="text-warning text-sm">
                  {errors.emailAddress.message}
                </small>
              )}
            </div>
            <div className="col-md-6 mb-1">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                {...register("phoneNumber")}
                type="text"
                aria-describedby="phoneNumberError"
                className="signup-form form-control"
                autoComplete="mobile"
                id="phoneNumber"
                name="phoneNumber"
                value={profileData?.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && (
                <small className="text-warning text-sm">
                  {errors.phoneNumber.message}
                </small>
              )}
            </div>
            <div className="mb-1">
              <label htmlFor="bio" className="form-label">
                Bio
              </label>
              <textarea
                {...register("bio")}
                type="text"
                className="signup-form form-control"
                aria-describedby="bioError"
                autoComplete="bio"
                id="bio"
                name="bio"
                value={profileData?.bio}
                onChange={handleChange}
              />
              {errors.bio && (
                <small className="text-warning text-sm">
                  {errors.bio.message}
                </small>
              )}
            </div>
            <div className="col-md-6 mb-1">
              <label htmlFor="experience" className="form-label">
                Experience
              </label>
              <input
                {...register("experience")}
                type="text"
                className="signup-form form-control"
                autoComplete="new-password"
                id="experience"
                name="experience"
                value={profileData?.experience}
                onChange={handleChange}
              />
              {errors.experience && (
                <small className="text-warning text-sm">
                  {errors.experience.message}
                </small>
              )}
            </div>
            <div className="col-md-6 mb-1 pb-3">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                {...register("location")}
                type="text"
                className="signup-form form-control"
                autoComplete="new-password"
                id="location"
                name="location"
                value={profileData?.location}
                onChange={handleChange}
              />
              {errors.location && (
                <small className="text-warning text-sm">
                  {errors.location.message}
                </small>
              )}
            </div>
            <Button
              cn="col-lg-4 col-12 rounded-pill "
              colour="white-btn"
              text={isSubmitting ? "Updating..." : "UPDATE PROFILE"}
              arrow="false"
              disabled={isSubmitting}
              type="submit"
            ></Button>
          </form>
        </div>
      </div>
    </div>
  );
}
