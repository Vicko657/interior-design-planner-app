import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import TheViews from "./pages/public/TheViews";
import SignIn from "./pages/public/SignIn";
import SignUp from "./pages/public/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import User from "./pages/private/User";
import Overview from "./pages/private/OverView";
import Projects from "./pages/private/projects";
import Rooms from "./pages/private/rooms";
import Archived from "./pages/private/Archived";
import Calendar from "./pages/private/Calendar";
import Tasks from "./pages/private/Tasks";
import Files from "./pages/private/Files";
import Clients from "./pages/private/clients";
import ShoppingList from "./pages/private/ShoppingList";
import Inbox from "./pages/private/Inbox";

export default function App() {
  return (
    // ReactRouter used to handle navigation
    <BrowserRouter>
      <div className="container-fluid p-0 m-0 App">
        {/*-- Header */}
        <Header />
        <Routes>
          <Route path="home" element={<Home />}></Route>
          <Route path="/" element={<Navigate replace to="home" />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="theviews" element={<TheViews />}></Route>
          <Route path="signin" element={<SignIn />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="user" element={<User />}>
            <Route path="overview" element={<Overview />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="rooms" element={<Rooms />}></Route>
            <Route path="archived" element={<Archived />}></Route>
            <Route path="calendar" element={<Calendar />}></Route>
            <Route path="tasks" element={<Tasks />}></Route>
            <Route path="upload" element={<Files />}></Route>
            <Route path="list" element={<ShoppingList />}></Route>
            <Route path="clients" element={<Clients />}></Route>
            <Route path="inbox" element={<Inbox />}></Route>
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
