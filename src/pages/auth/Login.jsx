import React, { useState } from "react";
import "./Login.css";
import Button from "../../components/common/Button";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    setError,
  } = useForm();

  const [apiError, setApiError] = useState(null);

  const onSubmit = async (credentials) => {
    try {
      setApiError(null);
      const { remember, ...userCredentials } = credentials;
      await login(userCredentials);
      navigate("/user");
    } catch (err) {
      const apiErrors = err.response?.data;
      setApiError(apiErrors || "Login failed");
    }
  };

  return (
    <>
      <div className="login-textimage d-flex col-12 row p-0 m-0">
        <div className="col-lg-6 col-12 d-flex columns align-items-start justify-content-start">
          <div className="card w-100 m-lg-5">
            <div className="card-body m-5">
              <h2 className="pb-lg-5 pb-4">Log In</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                {apiError && (
                  <div className="alert alert-danger text-warning">
                    {apiError}
                  </div>
                )}
                <div className="mb-1">
                  <input
                    {...register("username")}
                    type="text"
                    className="login-form form-control w-100"
                    aria-describedby="usernameError"
                    placeholder="USERNAME"
                    autoComplete="username"
                  />
                </div>

                <div className="mb-1 pt-2">
                  <input
                    {...register("password")}
                    type="password"
                    className="login-form form-control"
                    placeholder="PASSWORD"
                    autoComplete="current-password"
                    aria-describedby="passwordHelp"
                  />
                </div>

                <div className="form-check pt-3 pb-3">
                  <input
                    {...register("remember")}
                    type="checkbox"
                    className="form-check-input"
                  />
                  <label className="form-check-label">Remember Me</label>
                  {errors.remember && (
                    <small className="text-warning text-sm">
                      {errors.remember.message}
                    </small>
                  )}
                </div>

                <Button
                  colour="red-btn login-btn"
                  text={isSubmitting ? "Authenticating..." : "LOGIN"}
                  arrow="false"
                  disabled={isSubmitting}
                  type="submit"
                ></Button>
              </form>

              <hr></hr>

              <Button
                colour="outline-red-btn "
                text=" LOGIN WITH GOOGLE"
                arrow="false"
                disabled={null}
                type="button"
              ></Button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12 pt-lg-5 p-5 pe-lg-5">
          <div className="card login-img p-4">
            <div className="card-body d-flex columns align-items-end"></div>
          </div>
        </div>
      </div>
    </>
  );
}
