import React from "react";
import "../../components/Table.css";
import "./inventory/Inventory.css";
import Table from "../../components/Table";
import { useNavigate } from "react-router-dom";

export default function InventoryTab({ items }) {
  const navigate = useNavigate();
  const inventoryheaders = [
    "Item",
    "Description",
    "Quantity",
    "Price",
    "Ordered",
  ];
  return (
    <div className="user-table card h-100">
      <div className="card-body">
        <Table
          rows={
            items.length > 0 ? (
              items.map((item) => (
                <tr>
                  <th scope="row">{item.itemName}</th>
                  <td className="task-project">{item.description}</td>
                  <td className="text-center">{item.quantity}</td>
                  <td>£{item.price}</td>
                  <td>
                    <span
                      className={`${item.ordered === "yes" ? "completed" : "not-completed"} rounded-pill`}
                    >
                      {item.ordered}
                    </span>
                  </td>
                  <td href="/">edit</td>
                </tr>
              ))
            ) : (
              <p>No items found</p>
            )
          }
          headers={inventoryheaders}
        />
      </div>
    </div>
  );
}
