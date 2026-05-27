import React from "react";
import ItemRow from "./ItemRow";
import Table from "../../../components/common/Table";

export default function ItemList({ rooms }) {
  const headers = [
    "Item",
    "Description",
    "Quantity",
    "Price",
    "Ordered",
    "Project",
  ];
  return (
    <>
      <div className="user-table card h-100">
        <div className="card-body">
          <Table
            rows={
              rooms.length > 0 ? (
                rooms.map((room, index) => <ItemRow key={index} items={room} />)
              ) : (
                <p>No items found</p>
              )
            }
            headers={headers}
          />
        </div>
      </div>
    </>
  );
}
