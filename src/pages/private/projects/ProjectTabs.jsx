import React, { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TaskTab from "./ProjectTaskTab";
import InventoryTab from "./ProjectInventoryTab";
import roomService from "../../../api/services/roomService";
import useFetch from "../../../hooks/useFetch";
import Loader from "../../../components/common/Loader";
import Error from "../../../components/common/Error";

export default function ProjectTabs({ room }) {
  let tasks = <p>No tasks found</p>;
  let items = <p>No items found</p>;

  const { data, loading, error } = useFetch(
    () => roomService.getById(room),
    [room],
    room,
  );

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  if (room !== null) {
    tasks = <TaskTab tasks={data?.checklist} />;
    items = <InventoryTab items={data?.inventory} />;
  }

  return (
    <Tabs defaultActiveKey="profile" id="fill-tab-example" className="p-0" fill>
      <Tab eventKey="tasks" title="Tasks">
        {tasks}
      </Tab>
      <Tab eventKey="inventory" title="Inventory">
        {items}
      </Tab>
      <Tab eventKey="meetings" title="Meetings" disabled>
        <p>Meetings</p>
      </Tab>
      <Tab eventKey="gallery" title="Gallery" disabled>
        <p>Gallery</p>
      </Tab>
      <Tab eventKey="files" title="Files" disabled>
        <p>Files</p>
      </Tab>
    </Tabs>
  );
}
