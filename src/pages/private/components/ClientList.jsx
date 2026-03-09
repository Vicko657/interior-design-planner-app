import React from "react";
import "./ClientList.css";
import ClientItem from "./ClientItem";
export default function ClientList() {
  return (
    <>
      <div className="user-clients-table card h-100">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table align-middle table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Address</th>
                  <th scope="col">No. Projects</th>
                  <th scope="col">Notes</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <ClientItem />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
