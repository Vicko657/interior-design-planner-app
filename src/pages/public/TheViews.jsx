import React from "react";
import "../public/TheViews.css";

export default function TheViews() {
  return (
    <>
      <div className="space p-lg-5 p-4"></div>

      <div className="view-textimage col-12 d-flex row p-0 m-0">
        <div className="col-lg-6 pt-4 p-0 d-lg-none d-block">
          <div className="card yours p-4">
            <div className="card-body d-flex columns align-items-end"></div>
          </div>
        </div>
        <div className="col-lg-6 d-flex columns align-items-start justify-content-start ">
          <div className="card m-lg-5 m-2">
            <div className="card-body m-lg-5 m-2 pe-3">
              <h3 className="pb-lg-5 pb-4">Your View.</h3>
              <p>NO MORE MESSY FOLDERS, SCATTERED SCREENSHOTS OR LOST LINKS.</p>
              <p className="pb-lg-5 pb-2">
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
        <div className="col-lg-6 pt-4 p-0 d-lg-block d-none">
          <div className="card yours p-4">
            <div className="card-body d-flex columns align-items-end"></div>
          </div>
        </div>
      </div>

      <div className="space p-lg-5 p-2 d-lg-flex d-none"></div>
      <div className="space p-lg-5 p-2 d-lg-flex d-none"></div>

      <div className="view-textimage col-12 d-flex row p-0 m-0">
        <div className="col-lg-6 p-0">
          <div className="card">
            <div className="card-body theirs d-flex columns align-items-end"></div>
          </div>
        </div>
        <div className="col-lg-6  d-flex columns align-items-start justify-content-start">
          <div className="card m-lg-5 m-2">
            <div className="card-body m-lg-5 m-3">
              <h3 className="pb-lg-5 pb-4">Their View.</h3>
              <p className="">DECISION MAKING MADE EASIER.</p>
              <p className="pb-lg-5 pb-2">
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

      <div className="space p-lg-5 p-2 d-lg-flex d-none"></div>
      <div className="space p-lg-5 p-2 d-lg-flex d-none"></div>

      <div className="view-textimage col-12 d-flex row p-0 m-0">
        <div className="col-lg-6 p-0 d-lg-none d-block">
          <div className="card ours p-4">
            <div className="card-body d-flex columns align-items-end"></div>
          </div>
        </div>
        <div className="col-lg-6 col-12 d-flex columns align-items-start justify-content-start">
          <div className="card m-lg-5 m-2">
            <div className="card-body m-lg-5 m-3">
              <h3 className="pb-lg-5 pb-4">Our View.</h3>
              <p className="pb-lg-5 pb-2">
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
        <div className="col-lg-6 col-12 p-0 d-lg-block d-none">
          <div className="card ours p-4">
            <div className="card-body d-flex columns align-items-end"></div>
          </div>
        </div>
      </div>
      <div className="jumbotron views-hero p-5 d-flex columns align-items-center justify-content-center">
        <div className="text-center">
          <h3 className="pb-4">Have Any Questions? We Are Here To Help.</h3>
          <button className="white-btn">
            FAQS
            <img className="ps-4" src="imgs/arrow-red.svg"></img>
          </button>
        </div>
      </div>
    </>
  );
}
