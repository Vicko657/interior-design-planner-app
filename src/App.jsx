import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import TheViews from "./pages/public/TheViews";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import PrivateLayout from "./components/layout/PrivateLayout";
import Dashboard from "./pages/private/dashboard/Dashboard";
import Projects from "./pages/private/projects/Projects";
import Rooms from "./pages/private/rooms/Rooms";
import Archived from "./pages/private/projects/ProjectArchive";
import Calendar from "./pages/private/calendar/Calendar";
import Tasks from "./pages/private/tasks/Tasks";
import Files from "./pages/private/files/Files";
import Clients from "./pages/private/clients/Clients";
import Inventory from "./pages/private/inventory/Inventory";
import Inbox from "./pages/private/inbox/Inbox";
import PublicLayout from "./components/layout/PublicLayout";
import ProjectDetails from "./pages/private/projects/ProjectDetails";
import ClientDetails from "./pages/private/clients/ClientDetails";
import Error from "./pages/public/Error";

export default function App() {
  return (
    // ReactRouter used to handle navigation
    <BrowserRouter>
      <div className="container-fluid p-0 m-0 App">
        {/*-- ReactRouter logged out */}
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="home" element={<Home />}></Route>
            <Route path="/" element={<Navigate replace to="home" />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="theviews" element={<TheViews />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>

          {/*-- ReactRouter logged in */}
          <Route path="user" element={<PrivateLayout />}>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route
              path="projects/:projectId"
              element={<ProjectDetails />}
            ></Route>
            <Route path="rooms" element={<Rooms />}></Route>
            <Route path="archived" element={<Archived />}></Route>
            <Route path="calendar" element={<Calendar />}></Route>
            <Route path="tasks" element={<Tasks />}></Route>
            <Route path="upload" element={<Files />}></Route>
            <Route path="inventory" element={<Inventory />}></Route>
            <Route path="clients" element={<Clients />}></Route>
            <Route path="clients/:clientId" element={<ClientDetails />}></Route>
            <Route path="inbox" element={<Inbox />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
