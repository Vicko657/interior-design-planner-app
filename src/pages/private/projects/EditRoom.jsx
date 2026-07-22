import { React, useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm, Controller } from "react-hook-form";
import Button from "../../../components/common/Button";
import roomService from "../../../api/services/roomService";
import Select from "../../../components/common/Select";
import roomType from "../../../util/roomType.js";
import units from "../../../util/units.js";

export default function EditRoom({ id, showModal, onHide, data }) {
  const [apiError, setApiError] = useState(null);
  const {
    register,
    control,
    reset,
    formState: { errors, isSubmitting },
    handleSubmit,
    setError,
    setValue,
  } = useForm({
    defaultValues: {
      type: "",
      length: "",
      height: "",
      width: "",
      unit: "",
    },
  });

  // Fetch room data
  useEffect(() => {
    if (data) {
      reset(data);
      setValue("type", data?.room);
    }
  }, [data, reset]);

  // Update existing room data
  const onSubmit = async (response) => {
    try {
      setApiError(null);
      await roomService.put(response, id);
      onHide();
    } catch (err) {
      const apiErrors = err.response?.data;
      if (apiErrors && typeof apiErrors === "object") {
        Object.keys(apiErrors).forEach((field) => {
          setError(field, { type: "server", message: apiErrors[field] });
        });
      } else {
        setApiError(apiErrors || "Room update failed");
      }
    }
  };

  return (
    <Modal show={showModal} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <h4 className="p-0 m-0 modal-title">Edit Room</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          method="PUT"
          className="newRoom-form row"
          onSubmit={handleSubmit(onSubmit)}
        >
          {apiError && <div className="alert alert-danger">{apiError}</div>}

          <div className="mb-1 pt-2">
            <label htmlFor="type" className="form-label">
              Room Type
            </label>
            <Select
              optionName="type"
              register={register}
              aria-label="TypeError"
              name="type"
              data={roomType}
              selectKey={"id"}
              value={"type"}
              select={"type"}
            />
            {errors.type && (
              <small className="text-warning text-sm">
                {errors.type.message}
              </small>
            )}
          </div>

          <div className="mb-1 pt-2">
            <label htmlFor="length" className="form-label">
              Length
            </label>
            <input
              {...register("length")}
              type="number"
              step="0.01"
              min="0"
              placeholder="0.00"
              aria-describedby="lengthError"
              className="signup-form form-control"
              name="length"
            />
            {errors.length && (
              <small className="text-warning text-sm">
                {errors.length.message}
              </small>
            )}
          </div>
          <div className="mb-1 pt-2">
            <label htmlFor="height" className="form-label">
              Height
            </label>
            <input
              {...register("height")}
              type="number"
              step="0.01"
              min="0"
              placeholder="0.00"
              aria-describedby="heightError"
              className="signup-form form-control"
              name="height"
            />
            {errors.height && (
              <small className="text-warning text-sm">
                {errors.height.message}
              </small>
            )}
          </div>
          <div className="mb-1 pt-2">
            <label htmlFor="width" className="form-label">
              Width
            </label>
            <input
              {...register("width")}
              type="number"
              step="0.01"
              min="0"
              placeholder="0.00"
              aria-describedby="widthError"
              className="signup-form form-control"
              name="width"
            />
            {errors.width && (
              <small className="text-warning text-sm">
                {errors.width.message}
              </small>
            )}
          </div>
          <div className="mb-1 pt-2">
            <label htmlFor="unit" className="form-label">
              Unit
            </label>
            <Select
              optionName="unit"
              register={register}
              aria-label="UnitError"
              name="unit"
              data={units}
              selectKey={"id"}
              value={"unit"}
              select={"unit"}
            />
            {errors.unit && (
              <small className="text-warning text-sm">
                {errors.unit.message}
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
