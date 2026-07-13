import React, { useState } from "react";
import "../../private/tasks/Tasks.css";
import Table from "../../../components/common/Table";
import { useNavigate } from "react-router-dom";
import EditTask from "../tasks/EditTask";
import Button from "../../../components/common/Button";
import DeleteTask from "../tasks/DeleteTask";

export default function ProjectTaskTab({ tasks, room }) {
  const navigate = useNavigate();
  const taskheaders = ["Task", "Details", "Due Date", "Completed"];
  const [modalShow, setModalShow] = useState(false);
  const [selected, setSelected] = useState(null);
  return (
    <div className="user-table card h-100">
      <div className="card-body">
        <Table
          rows={tasks.map((task, index) => (
            <tr key={index}>
              <th scope="row">{task.taskName}</th>
              <td className="task-project">{task.task}</td>
              <td>{task.date}</td>
              <td>
                <span
                  className={`${task.completed === true ? "completed" : "not-completed"} rounded-pill`}
                >
                  {task.completed === true ? "YES" : "NO"}
                </span>
              </td>
              <td onClick={(e) => e.stopPropagation()}>
                <Button
                  arrow="false"
                  text="Edit"
                  btnfunction={() => {
                    setSelected(index);
                    setModalShow(true);
                  }}
                  type="submit"
                  cn="delete-btn"
                ></Button>
                <EditTask
                  id={room}
                  index={index}
                  showModal={modalShow && selected === index}
                  onHide={() => setModalShow(false)}
                  response={task}
                />
              </td>
              <td onClick={(e) => e.stopPropagation()}>
                <DeleteTask id={room} index={index} />
              </td>
            </tr>
          ))}
          headers={taskheaders}
        />
      </div>
    </div>
  );
}
