import React, { useState, useEffect } from "react";
import "./Projects.css";
import ProjectList from "./ProjectList";
import Button from "../../../components/common/Button";
import projects from "../../../data/projects.js";
import projectService from "../../../api/services/projectService";
import useFetch from "../../../hooks/useFetch";
import Loader from "../../../components/common/Loader";
import Error from "../../../components/common/Error";

export default function Projects() {
  const { data, loading, error } = useFetch(projectService.get);
  const [projectData, setProjectData] = useState(null);

  // Fetch projects data
  (useEffect(() => {
    if (data) {
      setProjectData(data);
    }
  }),
    [data]);

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;
  return (
    <>
      <div className="container-fluid users-projects w-100 p-4">
        <div className="row g-2 row-cols-1 pt-4">
          <div className="col-8 ps-4">
            <h3 className="page-title">Projects</h3>
          </div>
          <div className="col-4 mt-auto me-auto pe-5">
            <Button
              page="user/list"
              colour="outline-red-btn"
              cn="rounded-pill d-flex align-items-end ms-auto p-3 pt-2 pb-2"
              text="ADD PROJECT"
            ></Button>
          </div>
        </div>
        <div className="row g-2 row-cols-1 pt-4">
          <div className="col-12">
            <ProjectList projects={projectData?.content} />
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </>
  );
}
