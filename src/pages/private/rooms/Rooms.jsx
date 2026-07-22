import React, { useState, useEffect } from "react";
import "./Rooms.css";
import Button from "../../../components/common/Button";
import Card from "react-bootstrap/Card";
import roomType from "../../../util/roomType.js";
roomType;
import roomService from "../../../api/services/roomService";
import Collapse from "react-bootstrap/Collapse";
import useFetch from "../../../hooks/useFetch";
import Loader from "../../../components/common/Loader";
import Error from "../../../components/common/Error";
import Select from "../../../components/common/Select";

export default function Room() {
  const [roomOption, setRoomOption] = useState(null);
  const [open, setOpen] = useState(null);

  const { data, loading, error } = useFetch(
    () => roomService.getByType(roomOption),
    [roomOption],
    roomOption,
  );

  const room = roomType.find((r) => r.id === roomOption);

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

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
            <>
              <Card
                key={room.id}
                className="m-1 d-lg-block d-none"
                onClick={() => {
                  if (open && open !== room.id) {
                    setOpen(null);
                    setTimeout(() => {
                      setOpen(room.id);
                      setRoomOption(room.id);
                    }, 100);
                  } else {
                    setOpen(room.id);
                    setRoomOption(room.id);
                  }
                }}
                style={{
                  width: "13rem",
                }}
              >
                <Card.Body className="p-lg-4 p-2">
                  <Card.Title>{room.type}</Card.Title>
                  <Card.Subtitle className="mt-2">
                    {room.description}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </>
          ))}
          <Select
            optionName={null}
            aria-label="StatusError"
            register={null}
            name="type"
            data={roomType}
            selectKey={"id"}
            value={"type"}
            select={"room type"}
            cn="d-lg-none d-block rooms-select"
            onChange={(selected) => {
              if (open && open !== selected) {
                setOpen(null);
                setTimeout(() => {
                  setOpen(selected);
                  setRoomOption(selected);
                }, 100);
              } else {
                setOpen(selected);
                setRoomOption(selected);
              }
            }}
          />
          <hr className="mt-4"></hr>
          <div className="room-categories row g-2 row-cols-1  ">
            <Collapse in={open === roomOption}>
              {roomOption !== null ? (
                <div id="collapse-text">
                  <>
                    <p>{data?.content.length} rooms found</p>
                  </>
                  {data?.content.length > 0 ? (
                    data?.content.map((type) => (
                      <Card className="rooms m-1 flex-row w-40">
                        <Card.Img
                          variant="left"
                          className="p-4"
                          src="/imgs/room-icon.svg"
                        />
                        <Card.Body className="p-4 ps-1">
                          <Card.Title>{type.projectName}</Card.Title>
                          <Card.Subtitle className="mt-2">
                            {room?.type}
                          </Card.Subtitle>

                          <Card.Subtitle className="mt-2">
                            L: {type.length} {type.unit} | H: {type.height}{" "}
                            {type.unit} | W: {type.width} {type.unit}
                          </Card.Subtitle>
                        </Card.Body>
                      </Card>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              ) : (
                <></>
              )}
            </Collapse>
          </div>
        </div>
      </div>
    </>
  );
}
