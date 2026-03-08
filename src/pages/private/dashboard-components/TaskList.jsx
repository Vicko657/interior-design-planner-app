import React from "react";
import "./TaskList.css";
export default function TaskList() {
  return (
    <>
      <div className="user-tasks card p-3 h-100">
        <div className="card-body d-flex flex-column">
          <div className="card-header p-0">
            <h5 className="card-title">Todays Tasks</h5>
          </div>
          <ul className="list-group list-group-flush mt-auto">
            <li className="list-group-item"> </li>
            <li className="list-group-item"></li>
            <li className="list-group-item"> </li>
          </ul>
        </div>
      </div>
    </>
  );
}
