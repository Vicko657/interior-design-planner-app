import React from "react";
import { useParams } from "react-router-dom";
import "./ClientDetails.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import clients from "../../data/clients";
import projects from "../../data/projects";

export default function ClientDetails() {
  const params = useParams();
  const client = clients.find((c) => c.fullName === params.clientId);
  const project = projects.find((p) => p.clientName === client.fullName);
  const totalProjects = project.id.length;
  return (
    <div className="container-fluid users-clients w-100">
      <div className="header client-header row row-cols-1 pt-1">
        <div className="p-lg-5 col-md-6">
          <p>Client Name</p>
          <h3 className="text-left">{client.fullName}</h3>
        </div>
        <div className="p-lg-5 col-md-4 mt-auto mb-0 me-2">
          <div className="d-flex ">
            <div className="col-md-9">
              <p className="date m-1">Phone Number</p>
              <p className="date m-1">Email Address</p>
            </div>
            <div className="col-md-3 text-end">
              <p className="date client-details m-1">{client.phoneNumber}</p>
              <p className="date client-details m-1">{client.emailAddress}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-2 row-cols-1 p-3 pt-4">
        <div className="col-md-6">
          <div className="client-notes card h-100 p-3">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title mb-3">Notes</h5>
              <p className="description mb-auto">{client.notes}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="clients-projects card h-100 p-3">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title mb-3">Total Projects</h5>
              <h6 className="mb-1 text-end">{client.totalProjects}</h6>
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
                    <h6>£{project.budget}</h6>
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
