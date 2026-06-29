import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./ProjectDetails.css";
import rooms from "../../../data/rooms";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TaskTab from "./ProjectTaskTab";
import InventoryTab from "./ProjectInventoryTab";
import projectService from "../../../api/services/projectService";
import useFetch from "../../../hooks/useFetch";
import Loader from "../../../components/common/Loader";
import Error from "../../../components/common/Error";
import Button from "../../../components/common/Button";
import EditProject from "./EditProject";

export default function ProjectDetails() {
  const params = useParams();
  const location = useLocation();
  const project = location.state?.project;
  const { data, loading, error } = useFetch(
    () => projectService.getById(project?.id),
    [project?.id],
  );
  const [modalShow, setModalShow] = useState(false);

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;
  const room = rooms.find((r) => r.project === project.projectName);

  return (
    <div className="container-fluid users-projects w-100">
      <div className="header project-header row row-cols-1 p-4">
        <div className="p-4 pb-md-4 pb-5 col-md-6 col-12">
          <p>Project Name</p>
          <h3 className="text-left">{project.projectName}</h3>
        </div>
        <div className="d-flex justify-content-md-end align-items-end justify-content-start pt-md-4 p-4 pt-0 col-md-6 col-12 mb-auto">
          <div className="me-md-5 me-auto">
            <p className="mb-2">Status</p>
            <p className="project-status">{project.status}</p>
          </div>
          <div className="mb-auto">
            <Button
              colour="outline-btn"
              cn="rounded-pill p-3 pt-2 pb-2 me-2 "
              text="EDIT PROJECT"
              btnfunction={() => setModalShow(true)}
            ></Button>
            <EditProject
              id={project?.id}
              showModal={modalShow}
              onHide={() => setModalShow(false)}
              data={data}
            />
          </div>
        </div>
      </div>

      <div className="row g-2 row-cols-1 p-3 pt-4">
        <div className="col-md-4">
          <div className="project-description card h-100 p-3">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title mb-3">Description</h5>
              <p className="description mb-auto">{project.description}</p>
              <div className="d-flex pt-md-0 pt-3">
                <div className="col-md-5">
                  <p className="date m-1 ms-0">Start Date:</p>
                  <p className="date m-1 ms-0">Due Date:</p>
                </div>
                <div className="text-start">
                  <p className="date m-1 ">{project.startDate}</p>
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
                <div className="col-md-4 col-10 text-end">
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
                <div className="card-body d-flex">
                  <div className="col-md-6 me-auto">
                    <h5 className="card-title mb-2">Budget</h5>
                    <h6 className="budget">£{project.budget}</h6>
                  </div>

                  <div className="col-md-6">
                    <h5 className="card-title mb-2">Remaining Budget</h5>
                    <h6 className="budget">£{project.budget}</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mt-2">
              <div className="project-client p-3 card h-100">
                <div className="card-body d-flex">
                  <h5 className="card-title me-auto text-start">Client</h5>
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
          className="p-0"
          fill
        >
          <Tab eventKey="tasks" title="Tasks">
            <TaskTab tasks={room.checklist} />
          </Tab>
          <Tab eventKey="inventory" title="Inventory">
            <InventoryTab items={room.inventory} />
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
