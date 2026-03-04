import React from "react";
import "../public/TheViews.css";
import Button from "../../components/Button";

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
              <Button
                page="theviews"
                colour="outline-red-btn"
                text="START YOUR PROJECT"
                arrow="true"
              ></Button>
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
              <Button
                page="theviews"
                colour="outline-red-btn"
                text="INVITE COLLABORATORS"
                arrow="true"
              ></Button>
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
              <Button
                page="theviews"
                colour="outline-red-btn"
                text="SEE FEATURES"
                arrow="true"
              ></Button>
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
          <Button
            page="theviews"
            colour="white-btn"
            text="FAQS"
            arrow="true"
          ></Button>
        </div>
      </div>
    </>
  );
}
