import React from "react";
import "../public/TheViews.css";

export default function TheViews() {
  return (
    <>
      <div className="space p-5"></div>
      <div className="view-textimage d-flex rows p-0">
        <div className="col-lg-6 d-flex columns align-items-start justify-content-start">
          <div className="card m-5">
            <div className="card-body m-5">
              <h3 className="pb-5">Your View.</h3>
              <p>NO MORE MESSY FOLDERS, SCATTERED SCREENSHOTS OR LOST LINKS.</p>
              <p className="pb-5">
                TAKE CONTROL OF EVERY ASPECT OF YOUR PROJECT, FROM INSPIRATION
                TO EXECUTION.
              </p>
              <button className="red-btn">
                START YOUR PROJECT{" "}
                <img className="ps-4" src="imgs/arrow-white.svg"></img>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 p-0">
          <div className="card yours p-4">
            <div className="card-body d-flex columns align-items-end"></div>
          </div>
        </div>
      </div>
      <div className="space p-5"></div>
      <div className="space p-5"></div>
      <div className="view-textimage  d-flex rows p-0">
        <div className="col-lg-6 p-0">
          <div className="card">
            <div className="card-body theirs d-flex columns align-items-end"></div>
          </div>
        </div>
        <div className="col-lg-6 d-flex columns align-items-start justify-content-start">
          <div className="card m-5">
            <div className="card-body m-5">
              <h3 className="pb-5">Their View.</h3>
              <p>DECISION MAKING MADE EASIER.</p>
              <p className="pb-5">
                BRING PEOPLE INTO YOUR PROJECT, YOUR PARTNER, FRIEND, CLIENT,
                CONTRACTOR, BY COLLABORATING ON IDEAS AND PLANNING.
              </p>
              <button className="red-btn">
                INVITE COLLABORATORS{" "}
                <img className="ps-4" src="imgs/arrow-white.svg"></img>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="space p-5"></div>
      <div className="space p-5"></div>
      <div className="view-textimage d-flex rows p-0">
        <div className="col-lg-6 d-flex columns align-items-start justify-content-start">
          <div className="card m-5">
            <div className="card-body m-5">
              <h3 className="pb-5">Our View.</h3>
              <p className="pb-5">
                MAKE SMARTER, MORE ORGANISED DESIGN CHOICES USING BUILT IN TOOLS
                AND STRUCTURE.
              </p>
              <button className="red-btn">
                SEE FEATURES{" "}
                <img className="ps-4" src="imgs/arrow-white.svg"></img>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 p-0">
          <div className="card ours p-4">
            <div className="card-body d-flex columns align-items-end"></div>
          </div>
        </div>
      </div>
      <div className="jumbotron views-hero p-5 d-flex columns align-items-center justify-content-center">
        <div className="text-center">
          <h3 className="display-4 pb-4">
            Have Any Questions? We Are Here To Help.
          </h3>
          <button className="white-btn">
            FAQS
            <img className="ps-4" src="imgs/arrow-red.svg"></img>
          </button>
        </div>
      </div>
    </>
  );
}
