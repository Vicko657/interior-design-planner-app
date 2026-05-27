import React from "react";
import "./TaskList.css";
import DesignerTaskRow from "./DesignerTaskRow";
import Table from "../../../components/Table";
export default function TaskList({ rooms }) {
  const headers = ["Task", "Completed", "Project"];
  return (
    <>
      <div className="user-tasks card p-3 h-100">
        <div className="card-body d-flex flex-column">
          <div className="card-header p-0">
            <h5 className="card-title">Recent Tasks</h5>
          </div>
          <Table
            rows={
              rooms.length > 0 ? (
                rooms.map((room, index) => (
                  <DesignerTaskRow key={index} tasks={room} />
                ))
              ) : (
                <p>No tasks found</p>
              )
            }
            headers={headers}
          />
        </div>
      </div>
    </>
  );
}
