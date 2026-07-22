import React from "react";
import "../../../components/common/Table.css";
import { useNavigate } from "react-router-dom";
import projectStatus from "../../../util/projectStatus.js";

export default function ProjectDeadlineRow({ project }) {
  const navigate = useNavigate();
  const status = projectStatus.find((s) => s.id === project.status);
  return (
    <tr
      onClick={() => navigate(`${project.projectName}`)}
      style={{ cursor: "pointer" }}
    >
      <th scope="row">{project.projectName}</th>
      <td>
        <span className="status rounded-pill">{status?.status}</span>
      </td>
      <td>{project.date}</td>
    </tr>
  );
}
