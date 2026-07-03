import React, { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TaskTab from "./ProjectTaskTab";
import InventoryTab from "./ProjectInventoryTab";

export default function ProjectTabs({ room }) {
  let tasks = <TaskTab room={data?.roomId} />;

  if (data?.roomId === null) {
    tasks = <p>No tasks found</p>;
  }
  return (
    <Tabs defaultActiveKey="profile" id="fill-tab-example" className="p-0" fill>
      <Tab eventKey="tasks" title="Tasks">
        {tasks}
      </Tab>
      <Tab eventKey="inventory" title="Inventory">
        <InventoryTab items={data?.roomId} />
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
