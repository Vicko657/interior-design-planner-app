import React from "react";
import "../public/SignIn.css";

export default function SignIn() {
  return (
    <>
      <div className="login-textimage d-flex col-12 row p-0 m-0">
        <div className="col-lg-6 col-12 d-flex columns align-items-start justify-content-start">
          <div className="card w-100 m-lg-5">
            <div className="card-body m-5">
              <h2 className="pb-lg-5 pb-4">Log In</h2>
              <form>
                <div className="mb-1">
                  <input
                    type="email"
                    className="login-form form-control w-100"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="ENTER EMAIL"
                  />
                </div>
                <div className="mb-1 pt-2">
                  <input
                    type="password"
                    className="login-form form-control"
                    id="exampleInputPassword1"
                    placeholder="PASSWORD"
                  />
                </div>
                <div className="form-check pt-3 pb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember me
                  </label>
                </div>

                <div className="d-grid">
                  <button type="submit" className="red-btn login-btn">
                    CREATE YOUR ACCOUNT
                  </button>
                </div>
                <hr></hr>
                <div className="d-grid">
                  <button type="submit" className="outline-red-btn login-btn">
                    LOG IN WITH GOOGLE
                  </button>
                </div>
              </form>
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
