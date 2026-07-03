import React from "react";
import "../../private/tasks/Tasks.css";
import Table from "../../../components/common/Table";
import { useNavigate } from "react-router-dom";
import roomService from "../../../api/services/roomService";
import useFetch from "../../../hooks/useFetch";
import Loader from "../../../components/common/Loader";
import Error from "../../../components/common/Error";

export default function ProjectTaskTab({ room }) {
  const navigate = useNavigate();
  const taskheaders = ["Task", "Details", "Due Date", "Completed"];

  const { data, loading, error } = useFetch(
    () => roomService.getById(room),
    [room],
  );

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  return (
    <div className="user-table card h-100">
      <div className="card-body">
        <Table
          rows={data?.checklist.map((task) => (
            <tr key={task.id}>
              <th scope="row">{task.taskName}</th>
              <td className="task-project">{task.task}</td>
              <td>{task.date}</td>
              <td>
                <span
                  className={`${task.completed === "yes" ? "completed" : "not-completed"} rounded-pill`}
                >
                  {task.completed}
                </span>
              </td>
              <td href="/">edit</td>
            </tr>
          ))}
          headers={taskheaders}
        />
      </div>
    </div>
  );
}
