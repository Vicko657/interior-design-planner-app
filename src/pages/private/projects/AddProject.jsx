import { React, useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm, Controller } from "react-hook-form";
import Button from "../../../components/common/Button";
import projectService from "../../../api/services/projectService";
import clientService from "../../../api/services/clientService";
import useFetch from "../../../hooks/useFetch";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "../../../components/common/Select";
import Loader from "../../../components/common/Loader";
import Error from "../../../components/common/Error";
import projectStatus from "../../../util/projectStatus.js";

export default function AddProject({ showModal, onHide }) {
  const { data, loading, error } = useFetch(clientService.get);
  const [clientData, setClientData] = useState(null);
  const [apiError, setApiError] = useState(null);
  const {
    register,
    control,
    reset,
    formState: { errors, isSubmitting },
    handleSubmit,
    setError,
  } = useForm();

  // Fetch clients data
  useEffect(() => {
    if (data) {
      setClientData(data || null);
    }
  }, [data]);

  // Create new project with data
  const onSubmit = async (response) => {
    try {
      setApiError(null);
      await projectService.post(response, response.clientId);
      reset({ ...response });
    } catch (err) {
      const apiErrors = err.response?.data;
      if (apiErrors && typeof apiErrors === "object") {
        Object.keys(apiErrors).forEach((field) => {
          setError(field, { type: "server", message: apiErrors[field] });
        });
      } else {
        setApiError(apiErrors || "Project creation failed");
      }
    }
  };

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;
  return (
    <Modal show={showModal} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <h4 className="p-0 m-0 modal-title">New Project</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          className="newProject-form row "
          onSubmit={handleSubmit(onSubmit)}
        >
          {apiError && <div className="alert alert-danger">{apiError}</div>}
          <div className="mb-1">
            <label htmlFor="clientId" className="form-label">
              <small>Client</small>
            </label>
            <Select
              optionName="clientId"
              register={register}
              aria-label="ProjectClientError"
              name="clientId"
              data={clientData?.content}
              selectKey={"id"}
              value={"fullName"}
              select={"client"}
            />
            {errors.client && (
              <small className="text-warning text-sm">
                {errors.client.message}
              </small>
            )}
          </div>
          <div className="mb-1 pt-2">
            <label htmlFor="projectName" className="form-label">
              Name
            </label>
            <input
              {...register("projectName")}
              type="text"
              className="signup-form form-control"
              aria-describedby="projectNameError"
              name="projectName"
            />
            {errors.projectName && (
              <small className="text-warning text-sm">
                {errors.projectName.message}
              </small>
            )}
          </div>
          <div className="mb-1 pt-2">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <Select
              optionName="status"
              register={register}
              aria-label="StatusError"
              name="status"
              data={projectStatus}
              selectKey={"id"}
              value={"status"}
              select={"status"}
            />
            {errors.status && (
              <small className="text-warning text-sm">
                {errors.status.message}
              </small>
            )}
          </div>
          <div className="mb-1 pt-2">
            <label htmlFor="budget" className="form-label">
              Budget
            </label>
            <input
              {...register("budget")}
              type="number"
              step="0.01"
              min="0"
              placeholder="0.00"
              aria-describedby="budgetError"
              className="signup-form form-control"
              name="budget"
            />
            {errors.budget && (
              <small className="text-warning text-sm">
                {errors.budget.message}
              </small>
            )}
          </div>
          <div className="col-md-5 mb-1  pt-2">
            <label htmlFor="startDate" className="form-label">
              Start Date
            </label>
            <Controller
              name="startDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  selected={field.value}
                  onChange={(date) => {
                    const formatted = date.toISOString().split("T")[0];
                    field.onChange(formatted);
                  }}
                  className="form-control"
                  dateFormat="yyyy-MM-dd"
                  aria-describedby="startDateError"
                  placeholderText="Select a date"
                />
              )}
            />
            {errors.startDate && (
              <small className="text-warning text-sm">
                {errors.startDate.message}
              </small>
            )}
          </div>
          <div className="col-md-5 mb-1 pt-2">
            <label htmlFor="dueDate" className="form-label">
              Due date
            </label>
            <Controller
              name="dueDate"
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
                  aria-describedby="dueDateError"
                  placeholderText="Select a date"
                />
              )}
            />
            {errors.dueDate && (
              <small className="text-warning text-sm">
                {errors.dueDate.message}
              </small>
            )}
          </div>
          <div className="mb-1 pt-2">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              {...register("description")}
              type="text"
              className="signup-form form-control"
              aria-describedby="descriptionError"
              name="description"
            />
            {errors.description && (
              <small className="text-warning text-sm">
                {errors.description.message}
              </small>
            )}
          </div>
          <div className="mb-1 pt-2">
            <label htmlFor="meetingURL" className="form-label">
              Meeting Link
            </label>
            <input
              {...register("meetingURL")}
              type="text"
              className="signup-form form-control"
              aria-describedby="meetingURLError"
              name="meetingURL"
            />
            {errors.meetingURL && (
              <small className="text-warning text-sm">
                {errors.meetingURL.message}
              </small>
            )}
          </div>
          <Button
            colour="red-btn login-btn"
            text={isSubmitting ? "Saving..." : "Save"}
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
