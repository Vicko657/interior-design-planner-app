import React from "react";
import "../../../components/common/Table.css";
import "../tasks/Tasks.css";
import { useNavigate } from "react-router-dom";

export default function DesignerTaskRow({ tasks, key }) {
  const navigate = useNavigate();
  const totalTasks = tasks.length;
  return (
    <tr
      key={key}
      onClick={() => navigate(`project/${tasks.project}`)}
      style={{ cursor: "pointer" }}
    >
      <th scope="row">{tasks.taskName}</th>

      <td>
        <span
          className={`${tasks.isCompleted === true ? "completed" : "not-completed"} rounded-pill`}
        >
          {tasks.isCompleted}
        </span>
      </td>

      <td
        className="p-2 task-project text-center project-category"
        rowSpan={totalTasks}
      >
        <span className="rounded-pill project-category">{tasks.project}</span>
      </td>
    </tr>
  );
}
