import React, { useState } from "react";
import "./Login.css";
import Button from "../../components/common/Button";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
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
      await login(credentials);
      navigate("/user");
    } catch (err) {
      const apiErrors = err.response?.data;

      if (apiErrors && typeof apiErrors === "object") {
        Object.keys(apiErrors).forEach((field) => {
          setError(field, { type: "server", message: apiErrors[field] });
        });
      } else {
        setApiError(apiErrors || "Login failed");
      }
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
                  {errors.username && (
                    <small className="text-warning text-sm">
                      {errors.username.message}
                    </small>
                  )}
                </div>

                <div className="mb-3 pt-2">
                  <input
                    {...register("password")}
                    type="password"
                    className="login-form form-control"
                    placeholder="PASSWORD"
                    autoComplete="current-password"
                    aria-describedby="passwordHelp"
                  />
                  {errors.password && (
                    <small className="text-warning text-sm">
                      {errors.password.message}
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

              <div className="pt-3 pb-1">
                <Link className="login-fp p-0">Forgot password?</Link>
              </div>

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
