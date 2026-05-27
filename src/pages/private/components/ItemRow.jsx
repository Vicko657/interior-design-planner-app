import React from "react";
import "../../../components/Table.css";
import "../Inventory.css";
import { useNavigate } from "react-router-dom";

export default function ItemRow({ items }) {
  const navigate = useNavigate();
  const totalItems = items.inventory.length;
  return items.inventory.map((item, index) => (
    <tr
      key={index}
      onClick={() => navigate(`${item.link}`)}
      style={{ cursor: "pointer" }}
    >
      <th scope="row">{item.itemName}</th>
      <td className="item-description">{item.description}</td>
      <td className="text-center">{item.quantity}</td>
      <td>£{item.price}</td>

      <td>
        <span
          className={`${item.ordered === "yes" ? "completed" : "not-completed"} rounded-pill`}
        >
          {item.ordered}
        </span>
      </td>

      {index === 0 && (
        <td
          className="p-2 task-project text-center project-category"
          rowSpan={totalItems}
        >
          <span className="rounded-pill project-category">{items.project}</span>
        </td>
      )}
    </tr>
  ));
}
