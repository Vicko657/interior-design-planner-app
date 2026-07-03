import React from "react";
import "../../private/tasks/Tasks.css";
import Table from "../../../components/common/Table";
import { useNavigate } from "react-router-dom";

export default function ProjectTaskTab({ tasks }) {
  const navigate = useNavigate();
  const taskheaders = ["Task", "Details", "Due Date", "Completed"];

  return (
    <div className="user-table card h-100">
      <div className="card-body">
        <Table
          rows={tasks.map((task) => (
            <tr key={task.id}>
              <th scope="row">{task.taskName}</th>
              <td className="task-project">{task.task}</td>
              <td>{task.date}</td>
              <td>
                <span
                  className={`${task.completed === "yes" ? "completed" : "not-completed"} rounded-pill`}
                >
                  {task.completed}
                </span>
              </td>
              <td href="/">edit</td>
            </tr>
          ))}
          headers={taskheaders}
        />
      </div>
    </div>
  );
}
