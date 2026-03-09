import React from "react";
import "./ProjectList.css";
import ProjectItem from "./ProjectItem";
export default function ProjectList({ projects }) {
  return (
    <>
      <div className="user-projects-table card h-100">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table align-middle table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Status</th>

                  <th scope="col">Type</th>
                  <th scope="col">Client</th>

                  <th scope="col">Start Date</th>
                  <th scope="col">Deadline</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <ProjectItem />
                <tr>
                  <th scope="row">Luxury Master Bedroom</th>
                  <td>
                    <span className="status rounded-pill">ON HOLD</span>
                  </td>
                  <td>Bedroom</td>
                  <td>03/12/26</td>
                  <td>25/03/26</td>
                  <td>25/03/26</td>
                </tr>
                <tr>
                  <th scope="row">Scandinavian Living Room</th>
                  <td>
                    <span className="status rounded-pill">ACTIVE</span>
                  </td>
                  <td>Living Room</td>
                  <td>03/06/26</td>

                  <td>25/03/26</td>
                  <td>25/03/26</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
