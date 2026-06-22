import React from "react";
import DashboardIcon from "./../../assets/imgs/overview-icon.svg?react";
import AllProjectsIcon from "./../../assets/imgs/rooms-icon.svg?react";
import RoomsIcon from "./../../assets/imgs/all-icon.svg?react";
import ArchivedIcon from "./../../assets/imgs/archived-icon.svg?react";
import CalendarIcon from "./../../assets/imgs/calendar-icon.svg?react";
import TasksIcon from "./../../assets/imgs/tasks-icon.svg?react";
import FilesIcon from "./../../assets/imgs/files-icon.svg?react";
import InventoryIcon from "./../../assets/imgs/shoppinglist-icon.svg?react";
import ClientsIcon from "./../../assets/imgs/clients-icon.svg?react";
import InboxIcon from "./../../assets/imgs/inbox-icon.svg?react";
import SearchIcon from "./../../assets/imgs/search-icon.svg?react";

const icons = {
  dashboard: DashboardIcon,
  all: AllProjectsIcon,
  rooms: RoomsIcon,
  archived: ArchivedIcon,
  calendar: CalendarIcon,
  tasks: TasksIcon,
  files: FilesIcon,
  inventory: InventoryIcon,
  clients: ClientsIcon,
  inbox: InboxIcon,
  search: SearchIcon,
};

export default function SVG({ path, viewbox, cn }) {
  const SvgIcon = icons[path];

  return (
    <SvgIcon className={`icon ${cn}`} viewBox={viewbox} aria-hidden="true" />
  );
}
