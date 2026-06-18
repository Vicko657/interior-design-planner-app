import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center loader">
      <div>
        <h3>
          <span>Loading...</span>
        </h3>
      </div>
    </div>
  );
}
