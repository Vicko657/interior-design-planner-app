import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div
      className="d-flex justify-content-center align-items-center loader"
      role="status"
    >
      <div className="spinner-border ">
        <span className="visually-hidden">
          <h3>Loading...</h3>
        </span>
      </div>
    </div>
  );
}
