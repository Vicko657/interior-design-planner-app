import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import TheViews from "./pages/public/TheViews";
import SignIn from "./pages/public/SignIn";
import SignUp from "./pages/public/SignUp";

export default function App() {
  return (
    // ReactRouter used to handle navigation
    <BrowserRouter>
      <div className="container-fluid p-0 m-0 App">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Navigate replace to="/home" />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/theviews" element={<TheViews />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
