import React from "react";
import ArchivedRow from "./ProjectArchiveRow";
import Table from "../../../components/common/Table";

export default function ProjectArchivedList({ projects }) {
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
