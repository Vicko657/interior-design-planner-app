import React from "react";
import "./TotalBudget.css";
import Button from "../../../components/common/Button";
import Table from "../../../components/common/Table";
import BudgetRow from "./BudgetRow";

export default function TotalBudget({ budgets }) {
  const headers = ["Client Name", "Budget"];
  return (
    <>
      <div className="user-budget user-meeting p-3 card h-100">
        <div className="card-body">
          <h5 className="card-title">Budget Used</h5>
          <Table
            rows={budgets?.map((budget) => (
              <BudgetRow key={budget.clientName} budget={budget} />
            ))}
            headers={headers}
          />
        </div>
      </div>
    </>
  );
}
