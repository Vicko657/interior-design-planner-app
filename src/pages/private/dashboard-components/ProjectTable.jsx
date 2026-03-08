import React from "react";
import "./ProjectTable.css";
export default function ProjectTable() {
  return (
    <>
      <div className="user-daily-projects p-3 card h-100">
        <div className="card-body">
          <h5 className="card-title">Project Progress</h5>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Status</th>
                  <th scope="col">Deadline</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th scope="row">Industrial Loft Redesign</th>
                  <td>
                    <span className="status rounded-pill">PLANNING</span>
                  </td>
                  <td>25/03/26</td>
                </tr>
                <tr>
                  <th scope="row">Luxury Master Bedroom</th>
                  <td>
                    {" "}
                    <span className="status rounded-pill">ON HOLD</span>
                  </td>
                  <td>03/12/26</td>
                </tr>
                <tr>
                  <th scope="row">Scandinavian Living Room</th>
                  <td>
                    <span className="status rounded-pill">ACTIVE</span>
                  </td>
                  <td>03/06/26</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
