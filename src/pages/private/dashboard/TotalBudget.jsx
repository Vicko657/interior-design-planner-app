import React from "react";
import "./TotalBudget.css";
import Button from "../../../components/Button";
export default function TotalBudget() {
  return (
    <>
      <div className="user-meeting card h-100 p-3">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title mb-4">Budget Used</h5>

          <h6 className="card-subtitle budget-total  text-start mb-auto">
            £5,000
          </h6>
          <Button
            page="user/list"
            colour="outline-red-btn"
            arrow="true"
            cn="rounded-pill d-flex align-items-end mt-2 ms-auto p-2"
          ></Button>
        </div>
      </div>
    </>
  );
}
