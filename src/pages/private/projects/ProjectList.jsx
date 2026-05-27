import React from "react";
import "../../../components/Table.css";
import ProjectRow from "./ProjectRow";
import Table from "../../../components/Table";

export default function ProjectList({ projects }) {
  const headers = [
    "Name",
    "Status",
    "Type",
    "Client Name",
    "Start Date",
    "End Date",
  ];
  return (
    <>
      <div className="user-table card h-100">
        <div className="card-body">
          <Table
            rows={
              projects.length > 0 ? (
                projects.map((project) => (
                  <ProjectRow key={project.id} project={project} />
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
