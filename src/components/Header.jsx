import React, { useState } from "react";
import "./Header.css";
import { useLocation } from "react-router-dom";
import MainNav from "./MainNav";

export default function Header() {
  const path = useLocation().pathname;
  const location = path.split("/")[1];

  return (
    <div className={"header " + location}>
      {/*-- Public Navigation */}
      <MainNav />
      <div className="header-content">
        {location === "home" ? (
          <>
            <div className="card home-header d-flex rows p-5">
              <div className="card-body header">
                <div className="header ps-0 p-lg-5 text-left">
                  <h1>Your Perspective Makes A Difference.</h1>
                  <p className="pt-5">
                    From homeowners to professional teams who are <br />
                    redesigning, organising or managing interior spaces.
                  </p>
                  <div className="buttons p-5 d-flex justify-content-end">
                    <button className="red-btn me-2">GET STARTED</button>
                    <button className="outline-btn">LEARN MORE</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
        {location === "about" ? (
          <>
            <div className="card about-header d-flex rows p-5">
              <div className="card-body header">
                <div className="header ps-0 p-lg-5 text-left">
                  <h2>About View.</h2>
                  <p className="pt-3">
                    A smart digital workspace planner for <br />
                    anyone redesigning, organising their <br />
                    home or big interior projects.
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : null}
        {location === "theviews" ? (
          <>
            <div className="card theviews-header d-flex rows p-5">
              <div className="card-body header">
                <div className="header ps-0 p-lg-5 text-left">
                  <div className="row">
                    <h2>Managing the Views.</h2>
                  </div>
                  <div className="row">
                    <div className="col-sm-6"></div>
                    <div className="col-sm-4">
                      <p className="pt-3">
                        Your Vision. Your Space. Your Plan. The home of where
                        your ideas live.
                      </p>
                    </div>
                    <div className="col-sm-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
