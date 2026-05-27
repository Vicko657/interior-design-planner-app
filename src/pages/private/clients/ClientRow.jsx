import React from "react";
import "../../../components/common/Table.css";
import { useNavigate } from "react-router-dom";

export default function ClientRow({ client }) {
  const navigate = useNavigate();
  return (
    <tr
      onClick={() => navigate(`${client.fullName}`)}
      style={{ cursor: "pointer" }}
    >
      <th scope="row">{client.fullName}</th>
      <td>{client.emailAddress}</td>
      <td>{client.phoneNumber}</td>
      <td>{client.address}</td>
      <td>{client.totalProjects}</td>
      <td>{client.notes}</td>
    </tr>
  );
}
