import React from "react";
import "./ActiveProjects.css";
export default function ActiveProjects() {
  return (
    <>
      <div className="user-active-projects p-3 card h-100">
        <div className="card-body d-flex">
          <h5 className="card-title me-auto text-start">Active Projects</h5>
          <h6 className="project-active mt-auto mb-0">3</h6>
        </div>
      </div>
    </>
  );
}
