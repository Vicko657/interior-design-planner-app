import React from "react";
import "./Dashboard.css";
import ProjectTable from "./dashboard-components/ProjectTable";
import TotalProjects from "./dashboard-components/TotalProjects";
import TaskList from "./dashboard-components/TaskList";
import CompletedProjects from "./dashboard-components/CompletedProjects";
import ActiveProjects from "./dashboard-components/ActiveProjects";
import Reminders from "./dashboard-components/Reminders";
import TotalBudget from "./dashboard-components/TotalBudget";
import designers from "../../data/designer";
import projects from "../../data/projects";
import rooms from "../../data/rooms";

export default function Dashboard() {
  const designer = designers;
  const project = projects;
  return (
    <>
      <div className="container-fluid users-dashboard w-100 p-4">
        <h2>Welcome {designer.fullName},</h2>

        <p className="ms-2">Your view of your projects, tasks and schedule.</p>

        <div className="row g-2 row-cols-1 pt-4">
          <div className="col-md-3">
            <ActiveProjects active={designer.activeProjects} />
          </div>
          <div className="col-md-6">
            <ProjectTable projects={project} />
          </div>
          <div className="col-md-3 ">
            <div className="row row-cols-1 h-100">
              <div className="col">
                <TotalProjects total={designer.totalProjects} />
              </div>
              <div className="col mt-2">
                <CompletedProjects completed={designer.completedProjects} />
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
            <TaskList rooms={rooms} />
          </div>
        </div>
      </div>
    </>
  );
}
