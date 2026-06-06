import {React, useState} from "react";
import "./Register.css";
import Button from "../../components/common/Button";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Register() {
  const navigate = useNavigate();
  const { registerUser } = useAuth();
  const [apiError, setApiError] = useState(null);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setApiError(null);
      const {terms, ...userData} = data;
      await registerUser(userData);
      navigate("/login");
    } catch (err) {

      const apiErrors = err.response?.data;

      if (apiErrors && typeof apiErrors === 'object'){
        Object.keys(apiErrors).forEach((field) => {
        setError(field, { type: "server", message: apiErrors[field] });
      })
      } else {
          setApiError(apiErrors || 'Registration failed');
      }

      
    }
  };

  return (
    <>
      <div className="signin-textimage d-flex col-12 row p-0 m-0">
        <div className="col-lg-6 col-12 d-flex columns align-items-start justify-content-start">
          <div className="card w-100 m-lg-5">
            <div className="card-body m-5">
              <h2 className="pb-lg-5 pb-4 ">Register</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                {apiError && (
                  <div className="alert alert-danger">
                    {apiError}
                  </div>
                )}
                <div className="mb-1">
                  <input
                    {...register("firstName")}
                    type="text"
                    className="signup-form form-control"
                    placeholder="FIRST NAME"
                    autoComplete="given-name"
                    aria-describedby="firstNameError"
                  />
                  {errors.firstName && (
                    <small className="text-warning text-sm">
                      {errors.firstName.message}
                    </small>
                  )}
                </div>
                <div className="mb-1 pt-2">
                  <input
                    {...register("lastName")}
                    type="text"
                    className="signup-form form-control"
                    placeholder="LAST NAME"
                    autoComplete="family-name"
                    aria-describedby="lastnameError"
                  />
                  {errors.lastName && (
                    <small className="text-warning text-sm">
                      {errors.lastName.message}
                    </small>
                  )}
                </div>
                <div className="mb-1 pt-2">
                  <input
                    {...register("emailAddress")}
                    type="email"
                    className="signup-form form-control"
                    aria-describedby="emailError"
                    placeholder="EMAIL ADDRESS"
                    autoComplete="email"
                  />
                  {errors.emailAddress && (
                    <small className="text-warning text-sm">
                      {errors.emailAddress.message}
                    </small>
                  )}
                </div>
                <div className="mb-1 pt-2">
                  <input
                    {...register("phoneNumber")}
                    type="text"
                    aria-describedby="phoneNumberError"
                    className="signup-form form-control"
                    placeholder="PHONE NUMBER"
                    autoComplete="mobile"
                  />
                  {errors.phoneNumber && (
                    <small className="text-warning text-sm">
                      {errors.phoneNumber.message}
                    </small>
                  )}
                </div>
                <div className="mb-1 pt-2">
                  <input
                    {...register("username")}
                    type="text"
                    className="signup-form form-control"
                    aria-describedby="usernameError"
                    placeholder="USERNAME"
                    autoComplete="username"
                  />
                  {errors.username && (
                    <small className="text-warning text-sm">
                      {errors.username.message}
                    </small>
                  )}
                </div>
                <div className="mb-1 pt-2">
                  <input
                    {...register("password")}
                    type="password"
                    className="signup-form form-control"
                    placeholder="PASSWORD"
                    autoComplete="new-password"
                  />
                  {errors.password && (
                    <small className="text-warning text-sm">
                      {errors.password.message}
                    </small>
                  )}
                </div>
                <div className="form-check pt-3 pb-3">
                  <input
                    {...register("terms"), {required: "You must agree to the Terms and Conditions"}}
                    type="checkbox"
                    className="form-check-input"
                    
                  />
                  <label className="form-check-label" >
                    By creating an account, you agree to our Terms and
                    Conditions and Privacy Policy
                  </label>
                  {errors.terms && (
                    <small className="text-warning text-sm">
                      {errors.terms.message}
                    </small>
                  )}
                </div>
                <Button
                  colour="red-btn login-btn"
                  text={isSubmitting ? "Registering..." : "CREATE YOUR ACCOUNT"}
                  arrow="false"
                  disabled={isSubmitting}
                  type="submit"
                ></Button>
              </form>
              <hr></hr>
              <Button
                colour="outline-red-btn "
                text="LOG IN WITH GOOGLE"
                arrow="false"
                disabled={null}
                type="button"
              ></Button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12 pt-lg-5 p-5 pe-lg-5">
          <div className="card signup-img p-4">
            <div className="card-body d-flex columns align-items-end"></div>
          </div>
        </div>
      </div>
    </>
  );
}
