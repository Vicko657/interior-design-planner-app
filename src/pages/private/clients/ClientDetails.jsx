import React from "react";
import { useParams, useLocation } from "react-router-dom";
import "./ClientDetails.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "../../../components/common/Button";

export default function ClientDetails() {
  const params = useParams();
  const location = useLocation();
  const client = location.state?.client;

  return (
    <div className="container-fluid users-clients w-100">
      <div className="header client-header row row-cols-1 p-4">
        <div className="p-4 pb-md-4 pb-3 col-md-6 col-12">
          <p>Client Name</p>
          <h3 className="text-left">{client?.fullName}</h3>
          <div className="d-flex mt-5">
            <div>
              <p className="date m-1">Phone Number:</p>
              <p className="date m-1">Email Address:</p>
            </div>
            <div className="text-start">
              <p className="date client-details m-1">{client?.phoneNumber}</p>
              <p className="date client-details m-1">{client?.emailAddress}</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-md-end align-items-end justify-content-start pt-md-4 p-4 pt-0 col-md-6 col-12 mb-auto">
          <div>
            <Button
              colour="outline-btn"
              cn="rounded-pill d-flex align-items-end ms-auto p-3 pt-2 pb-2 me-2"
              text="EDIT CLIENT"
            ></Button>
          </div>
          <div>
            <Button
              colour="outline-btn"
              cn="rounded-pill d-flex align-items-end ms-auto p-3 pt-2 pb-2"
              text="ADD PROJECT"
            ></Button>
          </div>
        </div>
      </div>

      <div className="row g-2 row-cols-1 p-3 pt-4">
        <div className="col-md-6">
          <div className="client-notes card h-100 p-3">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title mb-3">Notes</h5>
              <p className="description mb-auto">{client?.notes}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="clients-projects card h-100 p-3">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title mb-3">Total Projects</h5>
              <h6 className="mb-1 text-end">{client?.totalProjects}</h6>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="row row-cols-1 h-100">
            <div className="col">
              <div className="client-budget p-3 card h-100 pb-0">
                <div className="card-body d-flex ">
                  <div>
                    <h5 className="card-title mb-2">Total Budget</h5>
                    <h6>£</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="client-tabs row g-2 row-cols-1 p-3 pt-4">
        <Tabs
          defaultActiveKey="profile"
          id="fill-tab-example"
          className="p-0"
          fill
        >
          <Tab eventKey="meetings" title="Meetings" disabled>
            <p>Meetings</p>
          </Tab>

          <Tab eventKey="invoices" title="Invoices" disabled>
            <p>Invoices</p>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
