import React, { useState } from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="card p-5">
        <div className="card-body footer p-0"></div>
        <div className="footer d-flex row columns align-items-center justify-content-center">
          <div className="footer-logo col-sm-2 text-start">
            <h3>VIEW</h3>
          </div>

          <div className="col-sm-2">
            <p className="title">Info</p>
            <div className="m-0 row">
              <a className="footer-nav nav-link col p-0" href="/about">
                ABOUT
              </a>
              <a className="footer-nav nav-link col p-0" href="/theviews">
                THE VIEWS <span className="sr-only"></span>
              </a>
            </div>
          </div>

          <div className="col-sm-2 ps-3">
            <p className="title">Support</p>
            <a className="footer-nav nav-link p-0" href="/home">
              FAQs <span className="sr-only"></span>
            </a>
          </div>

          <div className="col-sm-3">
            <p className="title">Subscribe to the Newsletter</p>
            <form className="">
              <div className="form-group row ms-0 mb-1">
                <input
                  type="text"
                  className="subscribe form-control col-2"
                  id="exampleInputText1"
                  placeholder="EMAIL ADDRESS"
                />
                <button type="submit" className="subscribe-btn col p-0">
                  SIGN UP
                </button>
              </div>
            </form>
            <small className="form-check-label m-0" for="exampleCheck1">
              By signing up you are agreeing to our Privacy Policy.
            </small>
          </div>

          <div className="col-sm-2 ps-3 text-end">
            <p className="copyright">© VIEW 2026</p>
          </div>
        </div>
      </div>
    </>
  );
}
