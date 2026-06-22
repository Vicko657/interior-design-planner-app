import { React, useEffect, useState } from "react";
import "./Dashboard.css";
import ProjectTable from "./ProjectTable";
import TotalProjects from "./TotalProjects";
import TaskList from "./TaskList";
import CompletedProjects from "./CompletedProjects";
import ActiveProjects from "./ActiveProjects";
import Reminders from ".//Reminders";
import TotalBudget from "./TotalBudget";
import designers from "../../../data/designer";
import projects from "../../../data/projects";
import rooms from "../../../data/rooms";
import designerService from "../../../api/services/designerService";
import useFetch from "../../../hooks/useFetch";
import Loader from "../../../components/common/Loader";
import Error from "../../../components/common/Error";

export default function Dashboard() {
  const designer = designers;
  const project = projects;
  const { data, loading, error } = useFetch(designerService.getDashboard);
  const [dashboardData, setDashboardData] = useState(null);

  // Fetch designers dashboard data
  (useEffect(() => {
    if (data) {
      setDashboardData(data);
    }
  }),
    [data]);

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;
  return (
    <>
      <div className="container-fluid users-dashboard w-100 p-4">
        <h2>Welcome {dashboardData?.name},</h2>
        <p className="ms-2">Your view of your projects, tasks and schedule.</p>
        <div className="row g-2 row-cols-1 pt-4">
          <div className="col-md-3">
            <ActiveProjects active={dashboardData?.activeProjects} />
          </div>
          <div className="col-md-6">
            <ProjectTable projects={dashboardData?.projectProgress} />
          </div>
          <div className="col-md-3 ">
            <div className="row row-cols-1 h-100">
              <div className="col">
                <TotalProjects total={dashboardData?.totalProjects} />
              </div>
              <div className="col mt-2">
                <CompletedProjects
                  completed={dashboardData?.completedProjects}
                />
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
            <TaskList rooms={dashboardData?.recentTasks} />
          </div>
        </div>
      </div>
    </>
  );
}
