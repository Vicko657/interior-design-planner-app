import React from "react";
import "../../../components/Table.css";
import TaskRow from "./TaskRow";
import Table from "../../../components/Table";

export default function TaskList({ rooms }) {
  const headers = ["Task", "Details", "Due Date", "Completed", "Project"];
  return (
    <>
      <div className="user-table card h-100">
        <div className="card-body">
          <Table
            rows={
              rooms.length > 0 ? (
                rooms.map((room, index) => <TaskRow key={index} task={room} />)
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
