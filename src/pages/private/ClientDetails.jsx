import React from "react";
import { useParams } from "react-router-dom";

export default function ClientDetails() {
  const params = useParams();
  return (
    <div className="container-fluid users-clients w-100 p-4">
      <div className="row g-2 row-cols-1 pt-4">
        <div className=" header p-lg-5">
          <h2 className="text-left">{params.clientId}</h2>
          <br></br>
        </div>
      </div>
    </div>
  );
}
