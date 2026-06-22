import React from "react";
import "../../../components/common/Table.css";
import { useNavigate } from "react-router-dom";

export default function BudgetRow({ budget }) {
  const navigate = useNavigate();
  return (
    <tr
      onClick={() => navigate(`${budget.clientName}`)}
      style={{ cursor: "pointer" }}
    >
      <th scope="row">{budget.clientName}</th>
      <td>{budget.budget}</td>
    </tr>
  );
}
