import React from "react";
import "./ProjectTable.css";
import ProjectDeadlineRow from "./ProjectDeadlineRow";
import Table from "../../../components/common/Table";

export default function ProjectTable({ projects }) {
  const headers = ["Name", "Status", "End Date"];
  return (
    <>
      <div className="user-daily-projects p-3 card h-100">
        <div className="card-body">
          <h5 className="card-title">Project Progress</h5>
          <Table
            rows={
              projects.length > 0 ? (
                projects.map((project) => (
                  <ProjectDeadlineRow key={project.id} project={project} />
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
