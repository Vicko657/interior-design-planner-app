import React from "react";
import "./ProjectList.css";
import { Link } from "react-router-dom";

export default function ProjectItem({ project }) {
  return (
    <tr>
      <th scope="row">
        <Link to={`project`}>Industrial Loft Redesign </Link>
      </th>
      <td>
        <span className="status rounded-pill">PLANNING</span>
      </td>

      <td>
        <span className="type">Loft</span>
      </td>
      <td>Loft</td>

      <td>25/03/26</td>
      <td>25/03/26</td>
    </tr>
  );
}
