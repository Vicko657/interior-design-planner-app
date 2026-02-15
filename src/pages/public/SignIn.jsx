import React from "react";
import "../public/SignIn.css";

export default function SignIn() {
  return (
    <>
      <div className="view-textimage d-flex rows">
        <div className="col-lg-6 d-flex columns align-items-start justify-content-start">
          <div className="card m-5">
            <div className="card-body m-5">
              <h2 className="pb-5">Log In</h2>
              <form>
                <div clasName="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="ENTER EMAIL"
                  />
                </div>
                <div className="form-group pt-2">
                  <input
                    type="password"
                    className="form-control"
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
                  <label className="form-check-label" for="exampleCheck1">
                    REMEMBER ME
                  </label>
                </div>

                <button type="submit" className="red-btn login-btn">
                  LOG IN
                </button>
                <hr></hr>
                <button type="submit" className="outline-red-btn login-btn">
                  LOG IN WITH GOOGLE
                </button>

                <a className="register">Register here for a account</a>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6 p-5">
          <div className="card login-img p-5">
            <div className="card-body d-flex columns align-items-end"></div>
          </div>
        </div>
      </div>
    </>
  );
}
