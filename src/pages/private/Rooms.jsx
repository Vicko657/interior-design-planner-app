import React from "react";
import "./Rooms.css";
import Button from "../../components/Button";
import Card from "react-bootstrap/Card";
import rooms from "../../data/rooms.js";

export default function Room() {
  return (
    <>
      <div className="container-fluid users-rooms w-100 p-4">
        <div className="row g-2 row-cols-1 pt-4 pb-4">
          <div className="col-8 ps-4">
            <h3 className="page-title">Rooms</h3>
          </div>
          <div className="col-4 mt-auto me-auto pe-5">
            <Button
              page="projects"
              colour="outline-red-btn"
              cn="rounded-pill d-flex align-items-end ms-auto p-3 pt-2 pb-2"
              text="VIEW PROJECTS"
            ></Button>
          </div>
        </div>
        <div className="room-categories row g-2 row-cols-1 pt-4">
          {rooms.map((room) => (
            <Card className="ms-2 me-2" style={{ width: "18rem" }}>
              <Card.Body className="p-5">
                <Card.Title className="mb-3">{room.type}</Card.Title>
                <Card.Subtitle className="mb-2 me-auto text-end">
                  1
                </Card.Subtitle>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
