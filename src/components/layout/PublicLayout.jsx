import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./PublicLayout.css";
import Header from "./public/Header";
import Footer from "./public/Footer";

export default function PublicLayout() {
  return (
    <>
      {/*-- Header */}
      <Header />

      <main className="main">
        <Outlet />
      </main>

      {/*-- Footer */}
      <Footer />
    </>
  );
}
