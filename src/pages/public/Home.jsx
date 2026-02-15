import React from "react";
import "../public/Home.css";

export default function Home() {
  return (
    <>
      <div className="card home-features d-flex rows p-5">
        <div className="card-body ">
          <div className=" p-lg-5 text-center">
            <h3>Plan smarter. Design better. Stress less.</h3>
            <div className="row p-5">
              <div className="col-sm-2">
                <div className="card outline">
                  <div className="card-body">Create Projects</div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="card outline">
                  <div className="card-body">Schduele Meetings</div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="card outline">
                  <div className="card-body">Shopping List</div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="card outline">
                  <div className="card-body">Save files</div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="card outline">
                  <div className="card-body">Track Budgets</div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="card outline">
                  <div className="card-body">Project Folders</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card home-views d-flex rows p-5">
        <div className="card-body">
          <div className="row p-2">
            <div className="col-sm-8">
              <div className=" p-lg-5 text-left">
                <h2>Three different perspectives...</h2>
              </div>
            </div>
            <div className="col-sm-4 d-flex columns align-items-center justify-content-end">
              <button className="outline-red-btn">THE VIEWS</button>
            </div>
          </div>
          <div className="row p-5">
            <div className="col-sm-4">
              <div className="card your-view p-3">
                <div className="card-body d-flex columns align-items-end">
                  <h4>Your View.</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card their-view p-3">
                <div className="card-body d-flex columns align-items-end">
                  <h4>Their View.</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card our-view p-3">
                <div className="card-body d-flex columns align-items-end">
                  <h4>Our View.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card home-image"></div>
      <div className="jumbotron home-hero p-5 d-flex columns align-items-center justify-content-center">
        <div className="text-center">
          <h3 className="display-4">
            A Smart Digital Workspace Built For Anyone.
          </h3>
          <p className="lead p-3">
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
            <div class="carousel-item"></div>
          </div>
        </div>
      </div>
    </>
  );
}
