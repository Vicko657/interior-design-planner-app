import React from "react";
import "../public/Home.css";

export default function Home() {
  return (
    <>
      <div className="card home-features d-flex rows p-sm-5 p-4">
        <div className="card-body">
          <div className="p-sm-5 p-3 text-center">
            <h3>Plan smarter. Design better. Stress less.</h3>
            <div className="row p-sm-5 p-4">
              <div className="col-lg-2 col-md-4 col-6  mt-md-0 mt-sm-2 p-1">
                <div className="card outline">
                  <div className="card-body">Create Projects</div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-6 mt-md-0 mt-sm-2 p-1">
                <div className="card outline">
                  <div className="card-body">Schduele Meetings</div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-6 mt-md-0 mt-sm-2 p-1">
                <div className="card outline">
                  <div className="card-body">Shopping List</div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-6 mt-lg-0 mt-md-2 mt-sm-2 p-1">
                <div className="card outline">
                  <div className="card-body">Save files</div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-6 mt-lg-0 mt-md-2 mt-sm-2 p-1">
                <div className="card outline">
                  <div className="card-body">Track Budgets</div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-6 mt-lg-0 mt-md-2 mt-sm-2 p-1">
                <div className="card outline">
                  <div className="card-body">Project Folders</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card home-views d-flex rows p-sm-5 p-4 pb-5">
        <div className="card-body">
          <div className="row p-2">
            <div className="col-lg-8 col-12">
              <div className="p-lg-5 text-left">
                <h2>Three different perspectives...</h2>
              </div>
            </div>
            <div className="col-md-4 d-lg-flex d-none columns align-items-center justify-content-end">
              <button className="outline-red-btn">THE VIEWS</button>
            </div>
          </div>
          <div className="row p-lg-5 pt-4">
            <div className="col-lg-4 col-12">
              <div className="card your-view p-sm-3 p-1">
                <div className="card-body d-flex columns align-items-end">
                  <h4>Your View.</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="card their-view p-sm-3 p-1 mt-lg-0 mt-2">
                <div className="card-body d-flex columns align-items-end">
                  <h4>Their View.</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="card our-view p-sm-3 p-1 mt-lg-0 mt-2">
                <div className="card-body d-flex columns align-items-end">
                  <h4>Our View.</h4>
                </div>
              </div>
            </div>
            <div className="mobile-btn col-sm-4 d-lg-none d-flex pt-4">
              <button className="outline-red-btn">THE VIEWS</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card home-image"></div>
      <div className="jumbotron home-hero p-sm-5 p-4 d-flex columns align-items-center justify-content-center">
        <div className="text-center p-sm-0 p-5">
          <h3>A Smart Digital Workspace Built For Anyone.</h3>
          <p className="p-sm-3 pt-2">
            Find out more ways you can Plan using the View.
          </p>
          <button className="white-btn">
            ABOUT <img className="ps-4" src="imgs/arrow-red.svg"></img>
          </button>
        </div>
      </div>
      <div className="card home-quotes d-flex columns align-items-center justify-content-center">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active text-center p-5 ">
              <p className="quote">
                “I USED THE TOOL TO PLAN MY SMALL LIVING ROOM AND KEEP TRACK OF
                MY SPENDING.”
              </p>
              <h6 className="">Lena - First Apartment</h6>
            </div>
            <div className="carousel-item"></div>
            <div className="carousel-item"></div>
          </div>
        </div>
      </div>
    </>
  );
}
