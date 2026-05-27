import React from "react";
import "./Reminders.css";
import Button from "../../../components/Button";
export default function Reminders() {
  return (
    <>
      <div className="user-meeting card h-100 p-3">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title mb-4">Reminders</h5>
          <h4 className="meeting-title mb-3">Meeting with Client</h4>

          <p className="meeting-time mb-auto ">TIME: 11AM-2:30PM</p>
          <Button
            page="user/calendar"
            colour="outline-red-btn"
            text="START MEETING"
            cn="rounded-pill d-flex align-items-center mt-2 ms-auto p-2 ps-3 pe-3"
          ></Button>
        </div>
      </div>
    </>
  );
}
