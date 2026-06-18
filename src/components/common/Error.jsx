import React from "react";
import "./Error.css";

export default function Error({ error }) {
  return (
    <div className="d-flex justify-content-center align-items-center error">
      <h3>{error}</h3>
    </div>
  );
}
