import React from "react";
import "./TaskList.css";
import DesignerTaskRow from "./DesignerTaskRow";
import Table from "../../../components/common/Table";
export default function TaskList({ tasks }) {
  const headers = ["Task", "Completed", "Project"];
  return (
    <>
      <div className="user-tasks card p-3 h-100">
        <div className="card-body d-flex flex-column">
          <div className="card-header p-0">
            <h5 className="card-title">Recent Tasks</h5>
          </div>
          <Table
            rows={tasks?.map((task) => (
              <DesignerTaskRow key={task.project} task={task} />
            ))}
            headers={headers}
          />
        </div>
      </div>
    </>
  );
}
