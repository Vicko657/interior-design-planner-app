import React from "react";
import "./CompletedProjects.css";
export default function CompletedProjects({ completed }) {
  return (
    <>
      <div className="user-completed-projects card h-100 p-3">
        <div className="card-body d-flex">
          <h5 className="card-title me-auto">Completed Projects</h5>
          <h6 className="card-subtitle project-completed mt-auto">
            {completed}
          </h6>
        </div>
      </div>
    </>
  );
}
