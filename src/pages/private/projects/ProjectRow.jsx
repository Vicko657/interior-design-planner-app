import React from "react";
import "../../../components/common/Table.css";
import { useNavigate } from "react-router-dom";

export default function ProjectRow({ project }) {
  const navigate = useNavigate();
  return (
    <tr
      onClick={() =>
        navigate(`${project.projectName}`, { state: { project: project } })
      }
      style={{ cursor: "pointer" }}
    >
      <th scope="row">{project.projectName}</th>
      <td>
        <span className="status rounded-pill">{project.status}</span>
      </td>
      <td>
        <span className="room-type rounded-pill">{project.type}</span>
      </td>
      <td>{project.clientName}</td>
      <td>{project.startDate}</td>
      <td>{project.dueDate}</td>
    </tr>
  );
}
