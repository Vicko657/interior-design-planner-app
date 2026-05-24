import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProjectDetails.css";
import projects from "../../data/projects";
import rooms from "../../data/rooms";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function ProjectDetails() {
  const params = useParams();
  const project = projects.find((p) => p.projectName === params.projectId);
  const room = rooms.find((r) => r.project === project.projectName);

  return (
    <div className="container-fluid users-projects w-100">
      <div className="header project-header row row-cols-1 pt-1">
        <div className="p-lg-5 col-md-8">
          <p>Project Name</p>
          <h3 className="text-left">{project.projectName}</h3>
        </div>
        <div className="p-lg-5 col-md-4 mt-auto mb-0">
          <p className="mb-2">Status</p>
          <p className="project-status">{project.status}</p>
        </div>
      </div>

      <div className="row g-2 row-cols-1 p-3 pt-4">
        <div className="col-md-4">
          <div className="project-description card h-100 p-3">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title mb-3">Description</h5>
              <p className="description mb-auto">{project.description}</p>
              <div className="d-flex ">
                <div className="col-md-9">
                  <p className="date m-1">Start Date</p>
                  <p className="date m-1">Due Date</p>
                </div>
                <div className="col-md-3 text-end">
                  <p className="date m-1">{project.startDate}</p>
                  <p className="date m-1">{project.dueDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="project-room card h-100 p-3">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title mb-3">Room Type</h5>
              <h6 className="mb-1">{project.type}</h6>
              <hr></hr>
              <div className="d-flex dimensions">
                <div className="col-md-8">
                  <p className="m-1">Height</p>
                  <p className="m-1">Length</p>
                  <p className="m-1">Width</p>
                  <p className="m-1">Unit</p>
                </div>
                <div className="col-md-4 text-end">
                  <p className="m-1">{room.height}</p>
                  <p className="m-1">{room.length}</p>
                  <p className="m-1">{room.width}</p>
                  <p className="m-1">{room.unit}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="row row-cols-1 h-100">
            <div className="col">
              <div className="project-budget p-3 card h-100 pb-0">
                <div className="card-body d-flex ">
                  <div className="col-md-6">
                    <h5 className="card-title mb-2">Budget</h5>
                    <h6 className="">£{project.budget}</h6>
                  </div>
                  <div className="col-md-6">
                    <h5 className="card-title mb-2">Remaining Budget</h5>
                    <h6 className="">£{project.budget}</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mt-2">
              <div className="project-client p-3 card h-100">
                <div className="card-body d-flex">
                  <h5 className="card-title me-auto text-start">
                    Collaborators
                  </h5>
                  <h6 className=" mt-auto mb-0">{project.clientName}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-tabs row g-2 row-cols-1 p-3 pt-4">
        <Tabs
          defaultActiveKey="profile"
          id="fill-tab-example"
          className="mb-3 p-0"
          fill
        >
          <Tab eventKey="tasks" title="Tasks">
            <p>Tasks</p>
          </Tab>
          <Tab eventKey="inventory" title="Shopping List">
            <p>Shopping List</p>
          </Tab>
          <Tab eventKey="meetings" title="Meetings" disabled>
            <p>Meetings</p>
          </Tab>
          <Tab eventKey="gallery" title="Gallery" disabled>
            <p>Gallery</p>
          </Tab>
          <Tab eventKey="files" title="Files" disabled>
            <p>Files</p>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
