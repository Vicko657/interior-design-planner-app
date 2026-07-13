import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./ProjectDetails.css";
import projectService from "../../../api/services/projectService";
import useFetch from "../../../hooks/useFetch";
import Loader from "../../../components/common/Loader";
import Error from "../../../components/common/Error";
import Button from "../../../components/common/Button";
import EditProject from "./EditProject";
import AddRoom from "./AddRoom";
import EditRoom from "./EditRoom";
import ProjectTabs from "./ProjectTabs";
import ActionItems from "./ActionItems";

export default function ProjectDetails() {
  const params = useParams();
  const location = useLocation();
  const project = location.state?.project;
  const { data, loading, error } = useFetch(
    () => projectService.getSummary(project?.id),
    [project?.id],
  );
  const [modalShow, setModalShow] = useState(false);
  const [modalRoomShow, setModalRoomShow] = useState(false);
  const [modalRoomUpdateShow, setModalRoomUpdateShow] = useState(false);

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  let roomButton = (
    <Button
      colour="outline-btn"
      cn="rounded-pill p-3 pt-2 pb-2 me-2 "
      text="ADD ROOM"
      btnfunction={() => setModalRoomShow(true)}
    ></Button>
  );

  let roomDetails = <></>;

  if (data?.roomId !== null) {
    roomButton = (
      <Button
        colour="outline-btn"
        cn="rounded-pill p-3 pt-2 pb-2 me-2 "
        text="UPDATE ROOM"
        btnfunction={() => setModalRoomUpdateShow(true)}
      ></Button>
    );

    roomDetails = (
      <div>
        <h5 className="card-title mb-3">Room Type</h5>
        <h6 className="mb-1">{data?.room}</h6>
        <hr></hr>
        <div className="d-flex dimensions mb-4">
          <div className="col-md-8">
            <p className="m-1">Height</p>
            <p className="m-1">Length</p>
            <p className="m-1">Width</p>
            <p className="m-1">Unit</p>
          </div>
          <div className="col-md-4 col-10 text-end">
            <p className="m-1">{data?.height}</p>
            <p className="m-1">{data?.length}</p>
            <p className="m-1">{data?.width}</p>
            <p className="m-1">{data?.unit}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid users-projects w-100">
      <div className="header project-header row row-cols-1 p-4">
        <div className="p-4 pb-md-4 pb-5 col-md-6 col-12">
          <p>Project Name</p>
          <h3 className="text-left">{data?.projectName}</h3>
        </div>
        <div className="d-flex justify-content-md-end align-items-end justify-content-start pt-md-4 p-4 pt-0 col-md-6 col-12 mb-auto">
          <div className="me-md-5 me-auto">
            <p className="mb-2">Status</p>
            <p className="project-status">{data?.status}</p>
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
              <p className="description mb-auto">{data?.description}</p>
              <div className="d-flex pt-md-0 pt-3">
                <div className="col-md-5">
                  <p className="date m-1 ms-0">Start Date:</p>
                  <p className="date m-1 ms-0">Due Date:</p>
                </div>
                <div className="text-start">
                  <p className="date m-1 ">{data?.startDate}</p>
                  <p className="date m-1">{data?.dueDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="project-room card p-3">
            <div className="card-body d-flex flex-column">
              {roomDetails}
              {roomButton}
              <AddRoom
                project={project}
                showModal={modalRoomShow}
                onHide={() => setModalRoomShow(false)}
                data={data}
              />
              <EditRoom
                id={data?.roomId}
                showModal={modalRoomUpdateShow}
                onHide={() => setModalRoomUpdateShow(false)}
                data={data}
              />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row row-cols-1 h-100">
            <div className="col">
              <div className="project-budget p-3 card h-60 pb-0">
                <div className="card-body d-flex">
                  <div className="col-md-6 me-auto">
                    <h5 className="card-title mb-2">Budget</h5>
                    <h6 className="budget">£{data?.budget}</h6>
                  </div>

                  <div className="col-md-6">
                    <h5 className="card-title mb-2">Remaining Budget</h5>
                    <h6 className="budget">£{data?.remainingBudget}</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mt-2">
              <div className="project-client p-3 card h-60">
                <div className="card-body d-flex">
                  <h5 className="card-title me-auto text-start">Client</h5>
                  <h6 className=" mt-auto mb-0">{data?.clientName}</h6>
                </div>
              </div>
            </div>
            <div className="col mt-2">
              <ActionItems />
            </div>
          </div>
        </div>
      </div>

      <div className="project-tabs row g-2 row-cols-1 p-3 pt-4">
        <ProjectTabs room={data?.roomId} />
      </div>
    </div>
  );
}
