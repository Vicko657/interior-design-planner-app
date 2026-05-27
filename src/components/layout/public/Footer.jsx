import React, { useState } from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="card footer p-5">
        <div className="card-body footer columns p-0"></div>
        <div className=" d-flex row align-items-center justify-content-center text-center">
          <div className="footer-logo col-lg-2">
            <h3 className="footer-logo">VIEW</h3>
          </div>

          <div className="row col-lg-8 text-lg-start text-center align-items-start justify-content-center">
            <ul className="col-lg-2 col-sm-6 col-3 pt-lg-0 pt-5">
              <li>
                <h6 className="title">Info</h6>
              </li>
              <li>
                <a className="footer-nav nav-link  p-0" href="/about">
                  ABOUT
                </a>
              </li>
              <li>
                <a className="footer-nav nav-link  p-0" href="/theviews">
                  THE VIEWS <span className="sr-only"></span>
                </a>
              </li>
            </ul>

            <ul className="col-lg-2 col-sm-6 col-3 pt-lg-0 pt-5">
              <li>
                <h6 className="title">Support</h6>
              </li>
              <li>
                <a className="footer-nav nav-link p-0" href="/home">
                  FAQs <span className="sr-only"></span>
                </a>
              </li>
            </ul>

            <ul className="col-lg-6 col-10 pt-lg-0 pt-5">
              <li>
                <h6 className="title">Subscribe to the Newsletter</h6>
              </li>
              <li>
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
              </li>
              <li>
                <small className="form-check-label m-0 " for="exampleCheck1">
                  By signing up you are agreeing to our Privacy Policy.
                </small>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 ps-3 pt-lg-0 pt-5">
            <p className="copyright">© VIEW 2026</p>
          </div>
        </div>
      </div>
    </>
  );
}
