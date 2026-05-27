import React from "react";
import "../../../components/Table.css";
import "../Tasks.css";
import { useNavigate } from "react-router-dom";

export default function DesignerTaskRow({ tasks }) {
  const navigate = useNavigate();
  const totalTasks = tasks.checklist.length;
  return tasks.checklist.map((task, index) => (
    <tr
      key={index}
      onClick={() => navigate(`project/${tasks.project}`)}
      style={{ cursor: "pointer" }}
    >
      <th scope="row">{task.taskName}</th>

      <td>
        <span
          className={`${task.completed === "yes" ? "completed" : "not-completed"} rounded-pill`}
        >
          {task.completed}
        </span>
      </td>

      {index === 0 && (
        <td
          className="p-2 task-project text-center project-category"
          rowSpan={totalTasks}
        >
          <span className="rounded-pill project-category">{tasks.project}</span>
        </td>
      )}
    </tr>
  ));
}
