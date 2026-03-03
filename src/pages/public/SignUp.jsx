import React from "react";
import "../public/SignUp.css";

export default function SignUp() {
  return (
    <>
      <div className="signin-textimage d-flex col-12 row p-0 m-0">
        <div className="col-lg-6 col-12 d-flex columns align-items-start justify-content-start">
          <div className="card w-100 m-lg-5">
            <div className="card-body m-5">
              <h2 className="pb-lg-5 pb-4 ">Create Your Account</h2>
              <form>
                <div className="mb-1">
                  <input
                    type="text"
                    className="signup-form form-control"
                    id="exampleInputText1"
                    placeholder="FIRST NAME"
                  />
                </div>
                <div className="mb-1 pt-2">
                  <input
                    type="text"
                    className="signup-form form-control"
                    id="exampleInputText2"
                    placeholder="LAST NAME"
                  />
                </div>
                <div className="mb-1 pt-2">
                  <input
                    type="email"
                    className="signup-form form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="ENTER EMAIL"
                  />
                </div>
                <div className="mb-1 pt-2">
                  <input
                    type="password"
                    className="signup-form form-control"
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
                <div className="d-grid">
                  <button type="submit" className="red-btn login-btn">
                    LOG IN
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
          <div className="card signup-img p-4">
            <div className="card-body d-flex columns align-items-end"></div>
          </div>
        </div>
      </div>
    </>
  );
}
