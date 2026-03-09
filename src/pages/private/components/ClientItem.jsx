import React from "react";
import "./ClientList.css";
import { Link } from "react-router-dom";

export default function ClientItem({ project }) {
  return (
    <tr>
      <th scope="row">
        <Link to={`client`}>John Moss</Link>
      </th>

      <td>ohnmoss@gmail.com</td>
      <td>07853394758</td>
      <td>60 Belsize Avenue, London, N1 3EE</td>
      <td>3</td>
      <td>Prefers morning appointments</td>
    </tr>
  );
}
