import React from "react";
import ClientRow from "./ClientRow";
import Table from "../../../components/common/Table";

export default function ClientList({ clients }) {
  const headers = [
    "Name",
    "Email Address",
    "Phone Number",
    "Address",
    "No. Projects",
    "Notes",
  ];

  return (
    <>
      <div className="user-table card h-100">
        <div className="card-body">
          <Table
            rows={
              clients.length > 0 ? (
                clients.map((client) => (
                  <ClientRow key={client.id} client={client} />
                ))
              ) : (
                <p>No clients found</p>
              )
            }
            headers={headers}
          />
        </div>
      </div>
    </>
  );
}
