import React from "react";
import "../public/About.css";

export default function About() {
  return (
    <>
      <div className="card about-accordion d-flex rows p-5 pe-0">
        <div className="card-body me-0">
          <div className="row">
            <div className=" col-lg-5 col-sm-0"></div>
            <div
              className="accordion accordion-flush col-lg-7 col-sm-12"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Our Vision
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body"></div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Our Mission
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body"></div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Our Values
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card about-planning d-flex rows p-5">
        <div className="card-body">
          <div className="row p-2">
            <div className="p-lg-5 text-left">
              <h3>Start planning in 4 easy steps...</h3>
            </div>
          </div>
          <div className="row p-5 pt-0">
            <div className="col-sm-3">
              <div className="card create">
                <div className="card-body d-flex columns align-items-center justifiy-content-center">
                  <div className="p-4 text-center">
                    <img
                      className="pb-3"
                      src="imgs/about-create-icon.svg"
                    ></img>
                    <h4>Create</h4>
                    <p className="pt-2">A project on your room or space</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card upload">
                <div className="card-body d-flex columns align-items-center justifiy-content-center">
                  <div className="p-4 text-center">
                    <img
                      className="pb-3"
                      src="imgs/about-upload-icon.svg"
                    ></img>
                    <h4>Upload</h4>
                    <p className="pt-2">Inspiration, Item links & files </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card schedule">
                <div className="card-body d-flex columns align-items-center justify-content-center">
                  <div className="p-4 text-center">
                    <img
                      className="pb-3"
                      src="imgs/about-schedule-icon.svg"
                    ></img>
                    <h4>Schedule</h4>
                    <p className="pt-2">Meetings, CONTRACTORS & purchases</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card track">
                <div className="card-body d-flex columns align-items-center justify-content-center">
                  <div className="p-4 text-center">
                    <img className="pb-3" src="imgs/about-track-icon.svg"></img>
                    <h4>Track, Budget & Collaborate</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron about-hero p-5 d-flex columns align-items-center justify-content-center">
        <div className="text-center">
          <h3 className="display-4">One room to a full renovation.</h3>
        </div>
      </div>
      <div className="about-image d-flex rows p-0">
        <div className="col-lg-6 p-0">
          <div className="card interiors p-4">
            <div className="card-body d-flex columns align-items-end">
              <h3>Interior Designers.</h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6 p-0">
          <div className="card managers p-4">
            <div className="card-body d-flex columns align-items-end">
              <h3>Project Managers.</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="card about-features d-flex rows p-5">
        <div className="card-body pt-5 pb-5">
          <div className="row p-2">
            <div className=" p-lg-5 text-left">
              <h3>Everything You Need To Stay Organised.</h3>
              <p className="pt-3">Main features of View</p>
            </div>
          </div>
          <div className="row ps-5 pe-5">
            <div className="col-sm-6 pe-5">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">PROJECT FOLDERS</li>
                <li class="list-group-item">CLIENT MANAGEMENT</li>
                <li class="list-group-item">SHOPPING LIST MANAGER</li>
                <li class="list-group-item">PROJECT TIMELINES</li>
              </ul>
            </div>
            <div className="col-sm-6 pe-5">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">STORAGE FOR FILES AND IMAGES</li>
                <li class="list-group-item">BUDGET TRACKING</li>
                <li class="list-group-item">TASKS & NOTES IN ONE PLACE</li>
                <li class="list-group-item">SCHEDULE MEETINGS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron about-faq p-5 d-flex columns align-items-center">
        <div className="col-sm-10 p-5 justify-content-start">
          <h3 className="display-4">FAQs</h3>
        </div>
        <div className="col-sm-2 p-5 justify-content-end">
          <button className="arrow">
            <img src="imgs/arrow-white.svg"></img>
          </button>
        </div>
      </div>
    </>
  );
}
