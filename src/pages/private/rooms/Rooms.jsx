import React from "react";
import "./Rooms.css";
import Button from "../../../components/common/Button";
import Card from "react-bootstrap/Card";
import roomType from "../../../util/roomType.js";
roomType;

export default function Room() {
  return (
    <>
      <div className="container-fluid users-rooms w-100 p-4">
        <div className="row g-2 row-cols-1 pt-4">
          <div className="col-8 ps-4">
            <h3 className="page-title">Rooms</h3>
          </div>
          <div className="col-4 mt-auto me-auto pe-5">
            <Button
              page="projects"
              colour="outline-red-btn"
              cn="rounded-pill d-flex align-items-end ms-auto p-3 pt-2 pb-2"
              text="PROJECTS"
            ></Button>
          </div>
        </div>
        <div
          className="room-categories row g-2 row-cols-1 p-5"
          style={{ width: "100%" }}
        >
          {roomType.map((room) => (
            <Card
              key={room.id}
              className="m-1"
              style={{
                width: "13rem",
              }}
            >
              <Card.Body className="p-4">
                <Card.Title>{room.type}</Card.Title>
                <Card.Subtitle className="mt-2">
                  {room.description}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          ))}
          <hr className="mt-4"></hr>
          <div className="room-categories row g-2 row-cols-1  "></div>
        </div>
      </div>
    </>
  );
}
