import React from "react";
import "../../../components/Table.css";
import ArchivedRow from "./ArchivedRow";
import Table from "../../../components/Table";

export default function ArchivedList({ projects }) {
  const headers = [
    "Project Name",
    "Status",
    "Date of Completion",
    "Type",
    "Client Name",
  ];
  return (
    <>
      <div className="user-table card h-100">
        <div className="card-body">
          <Table
            rows={
              projects.length > 0 ? (
                projects.map((project) => (
                  <ArchivedRow key={project.id} project={project} />
                ))
              ) : (
                <p>No projects found</p>
              )
            }
            headers={headers}
          />
        </div>
      </div>
    </>
  );
}
