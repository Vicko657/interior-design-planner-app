import React from "react";
import "../public/SignUp.css";

export default function SignUp() {
  return (
    <>
      <div className="view-textimage d-flex rows">
        <div className="col-lg-6 d-flex columns align-items-start justify-content-start">
          <div className="card m-5">
            <div className="card-body m-5">
              <h2 className="pb-5">Register Your Account</h2>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputText1"
                    placeholder="FIRST NAME"
                  />
                </div>
                <div className="form-group pt-2">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputText2"
                    placeholder="LAST NAME"
                  />
                </div>
                <div className="form-group pt-2">
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
                    By creating an account, you agree to our Terms and
                    Conditions and Privacy Policy
                  </label>
                </div>

                <button type="submit" className="red-btn login-btn">
                  CREATE YOUR ACCOUNT
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
          <div className="card signup-img p-5">
            <div className="card-body d-flex columns align-items-end"></div>
          </div>
        </div>
      </div>
    </>
  );
}
