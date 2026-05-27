import React from "react";
import "../../../components/common/Table.css";
import { useNavigate } from "react-router-dom";

export default function ProjectDeadlineRow({ project }) {
  const navigate = useNavigate();
  return (
    <tr
      onClick={() => navigate(`${project.projectName}`)}
      style={{ cursor: "pointer" }}
    >
      <th scope="row">{project.projectName}</th>
      <td>
        <span className="status rounded-pill">{project.status}</span>
      </td>
      <td>{project.dueDate}</td>
    </tr>
  );
}
