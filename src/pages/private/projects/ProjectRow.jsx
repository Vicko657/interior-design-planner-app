import React from "react";
import "../../../components/common/Table.css";
import { useNavigate } from "react-router-dom";
import DeleteProject from "./DeleteProject";

export default function ProjectRow({ project }) {
  const navigate = useNavigate();

  let roomType = <span className="room-type rounded-pill">{project.room}</span>;

  if (project.room == null) {
    roomType = <span></span>;
  }
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
      <td>{roomType}</td>
      <td>{project.clientName}</td>
      <td>{project.startDate}</td>
      <td>{project.dueDate}</td>
      <td onClick={(e) => e.stopPropagation()}>
        <DeleteProject id={project.id} />
      </td>
    </tr>
  );
}
