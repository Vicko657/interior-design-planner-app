import React from "react";
import "../../../components/Table.css";
import { useNavigate } from "react-router-dom";

export default function ProjectArchivedRow({ project }) {
  const navigate = useNavigate();
  return (
    <tr
      onClick={() => navigate(`${project.projectName}`)}
      style={{ cursor: "pointer" }}
    >
      <th scope="row">{project.projectName}</th>

      <td>
        <span className="status rounded-pill">COMPLETED</span>
      </td>
      <td>{project.dueDate}</td>
      <td>
        <span className="room-type rounded-pill">{project.type}</span>
      </td>
      <td>{project.clientName}</td>
    </tr>
  );
}
