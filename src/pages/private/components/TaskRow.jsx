import React from "react";
import "../../../components/Table.css";
import "../Tasks.css";
import { useNavigate } from "react-router-dom";

export default function TaskRow({ task }) {
  const navigate = useNavigate();
  const totalTasks = task.checklist.length;
  return task.checklist.map((ta, index) => (
    <tr
      key={index}
      onClick={() => navigate(`project/${task.project}`)}
      style={{ cursor: "pointer" }}
    >
      <th scope="row">{ta.taskName}</th>
      <td className="task-project">{ta.task}</td>
      <td>{ta.date}</td>

      <td>
        <span
          className={`${ta.completed === "yes" ? "completed" : "not-completed"} rounded-pill`}
        >
          {ta.completed}
        </span>
      </td>

      {index === 0 && (
        <td
          className="p-2 task-project text-center project-category"
          rowSpan={totalTasks}
        >
          <span className="rounded-pill project-category">{task.project}</span>
        </td>
      )}
    </tr>
  ));
}
