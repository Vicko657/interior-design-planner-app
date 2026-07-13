import React from "react";
import "../../../components/common/Table.css";
import "../tasks/Tasks.css";
import { useNavigate } from "react-router-dom";

export default function DesignerTaskRow({ task }) {
  const navigate = useNavigate();
  const totalTasks = length;
  return (
    <tr
      onClick={() => navigate(`project/${task.project}`)}
      style={{ cursor: "pointer" }}
    >
      <th scope="row">{task.taskName}</th>

      <td>
        <span
          className={`${task.isCompleted === true ? "completed" : "not-completed"} rounded-pill`}
        >
          {task.isCompleted === true ? "YES" : "NO"}
        </span>
      </td>

      <td className="p-2 task-project text-center project-category">
        <span className="rounded-pill project-category">{task.project}</span>
      </td>
    </tr>
  );
}
