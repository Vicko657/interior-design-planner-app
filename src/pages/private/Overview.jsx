import React from "react";
import "./Overview.css";
import ProjectTable from "./dashboard-components/ProjectTable";
import TotalProjects from "./dashboard-components/TotalProjects";
import TaskList from "./dashboard-components/TaskList";
import CompletedProjects from "./dashboard-components/CompletedProjects";
import ActiveProjects from "./dashboard-components/ActiveProjects";
import Reminders from "./dashboard-components/Reminders";
import TotalBudget from "./dashboard-components/TotalBudget";
export default function Overview() {
  return (
    <>
      <div className="container-fluid users-dashboard w-100 p-4">
        <h2>Welcome User,</h2>
        <p className="ms-2">Your view of your projects, tasks and schedule.</p>

        <div className="row g-2 row-cols-1 pt-4">
          <div className="col-md-3">
            <ActiveProjects />
          </div>
          <div className="col-md-6">
            <ProjectTable />
          </div>
          <div className="col-md-3 ">
            <div className="row row-cols-1 h-100">
              <div className="col">
                <TotalProjects />
              </div>
              <div className="col mt-2">
                <CompletedProjects />
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 g-2 pt-2">
          <div className="col-sm-3">
            <Reminders />
          </div>
          <div className="col-sm-3">
            <TotalBudget />
          </div>
          <div className="col-sm-6">
            <TaskList />
          </div>
        </div>
      </div>
    </>
  );
}
