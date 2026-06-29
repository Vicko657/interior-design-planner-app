import React from "react";
import ProjectRow from "./ProjectRow";
import Table from "../../../components/common/Table";

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
            rows={projects?.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
            headers={headers}
          />
        </div>
      </div>
    </>
  );
}
