import { React, useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm, Controller } from "react-hook-form";
import Button from "../../../components/common/Button";
import taskService from "../../../api/services/taskService";
import useFetch from "../../../hooks/useFetch";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Loader from "../../../components/common/Loader";
import Error from "../../../components/common/Error";

export default function EditTask({ id, showModal, onHide, response, index }) {
  const [apiError, setApiError] = useState(null);
  const {
    register,
    control,
    reset,
    formState: { errors, isSubmitting },
    handleSubmit,
    setError,
  } = useForm({
    defaultValues: {
      taskName: "",
      task: "",
      date: "",
      completed: false,
    },
  });

  // Fetch task data
  useEffect(() => {
    if (response) {
      reset(response);
    }
  }, [response, reset]);

  // Update existing task
  const onSubmit = async (data) => {
    try {
      setApiError(null);
      await taskService.put(data, id, index);
      reset({ ...data });
    } catch (err) {
      const apiErrors = err.response?.data;
      if (apiErrors && typeof apiErrors === "object") {
        Object.keys(apiErrors).forEach((field) => {
          setError(field, { type: "server", message: apiErrors[field] });
        });
      } else {
        setApiError(apiErrors || "Task update failed");
      }
    }
  };

  return (
    <Modal show={showModal} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <h4 className="p-0 m-0 modal-title">Edit Task</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="newRoom-form row" onSubmit={handleSubmit(onSubmit)}>
          {apiError && <div className="alert alert-danger">{apiError}</div>}

          <div className="mb-1 pt-2">
            <label htmlFor="taskName" className="form-label">
              Task Name
            </label>
            <input
              {...register("taskName")}
              type="text"
              aria-describedby="taskNameError"
              className="signup-form form-control"
              name="taskName"
            />
            {errors.taskName && (
              <small className="text-warning text-sm">
                {errors.taskName.message}
              </small>
            )}
          </div>
          <div className="mb-1 pt-2">
            <label htmlFor="task" className="form-label">
              Task
            </label>
            <textarea
              {...register("task")}
              type="text"
              className="signup-form form-control"
              aria-describedby="taskError"
              name="task"
            />
            {errors.task && (
              <small className="text-warning text-sm">
                {errors.task.message}
              </small>
            )}
          </div>
          <div className="col-md-5 mb-1 pt-2">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <DatePicker
                  selected={field.value}
                  onChange={(date) => {
                    const formatted = date.toISOString().split("T")[0];
                    field.onChange(formatted);
                  }}
                  dateFormat="yyyy-MM-dd"
                  className="form-control"
                  aria-describedby="dateError"
                  placeholderText="Select a date"
                />
              )}
            />
            {errors.date && (
              <small className="text-warning text-sm">
                {errors.date.message}
              </small>
            )}
          </div>
          <div className="col-md-5 mb-1 pt-5">
            <label htmlFor="completed" className="form-label">
              Task Completed?
            </label>

            <input
              {...register("completed")}
              type="checkbox"
              className="signup-form ms-2"
              aria-describedby="completedError"
              name="completed"
            />
            {errors.completed && (
              <small className="text-warning text-sm">
                {errors.completed.message}
              </small>
            )}
          </div>

          <Button
            colour="red-btn login-btn"
            text={isSubmitting ? "Updating..." : "Save"}
            arrow="false"
            disabled={isSubmitting}
            type="submit"
            cn="rounded-pill d-flex align-items-end ms-auto p-3 pt-2 pb-2 mt-2"
          ></Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
