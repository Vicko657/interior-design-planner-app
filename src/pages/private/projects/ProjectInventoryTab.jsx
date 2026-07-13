import React, { useState } from "react";
import "../../../components/common/Table.css";
import "../inventory/Inventory.css";
import Table from "../../../components/common/Table";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";
import EditItem from "../inventory/EditItem";
import DeleteItem from "../inventory/DeleteItem";

export default function ProjectInventoryTab({ items, room }) {
  const navigate = useNavigate();
  const inventoryheaders = [
    "Item",
    "Description",
    "Quantity",
    "Price",
    "Ordered",
  ];
  const [modalShow, setModalShow] = useState(false);
  const [selected, setSelected] = useState(null);
  return (
    <div className="user-table card h-100">
      <div className="card-body">
        <Table
          rows={items.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.itemName}</th>
              <td className="task-project">{item.description}</td>
              <td className="text-center">{item.quantity}</td>
              <td>£{item.price}</td>
              <td>
                <span
                  className={`${item.ordered === true ? "completed" : "not-completed"} rounded-pill`}
                >
                  {item.ordered === true ? "YES" : "NO"}
                </span>
              </td>
              <td onClick={(e) => e.stopPropagation()}>
                <Button
                  arrow="false"
                  text="Edit"
                  btnfunction={() => {
                    setSelected(index);
                    setModalShow(true);
                  }}
                  type="submit"
                  cn="delete-btn"
                ></Button>
                <EditItem
                  id={room}
                  index={index}
                  showModal={modalShow && selected === index}
                  onHide={() => setModalShow(false)}
                  response={item}
                />
              </td>
              <td onClick={(e) => e.stopPropagation()}>
                <DeleteItem id={room} index={index} />
              </td>
            </tr>
          ))}
          headers={inventoryheaders}
        />
      </div>
    </div>
  );
}
