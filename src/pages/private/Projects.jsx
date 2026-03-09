import React from "react";
import "./Projects.css";
import ProjectList from "./components/ProjectList";
import Button from "../../components/Button";

export default function Project() {
  return (
    <>
      <div className="container-fluid users-projects w-100 p-4">
        <div className="row g-2 row-cols-1 pt-4">
          <div className="col-8 ps-4">
            <h2>Projects</h2>
          </div>
          <div className="col-4 mt-auto ">
            <div className="row row-cols-lg-2 row-cols-md-1 g-2">
              <div className="col p-0">
                <Button
                  page="user/list"
                  colour="outline-red-btn"
                  cn="rounded-pill d-flex align-items-end ms-auto ps-3 pe-3"
                  text="ADD NEW PROJECT"
                ></Button>
              </div>
              <div className="col">
                <Button
                  page="user/list"
                  colour="outline-red-btn"
                  cn="rounded-pill d-flex align-items-end ms-auto ps-3 pe-3"
                  text="UPDATE CLIENT"
                ></Button>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-2 row-cols-1 pt-4">
          <div className="col-12">
            <ProjectList />
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </>
  );
}
