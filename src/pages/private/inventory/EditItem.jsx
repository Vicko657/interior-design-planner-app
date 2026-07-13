import { React, useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm, Controller } from "react-hook-form";
import Button from "../../../components/common/Button";
import itemService from "../../../api/services/itemService";
import useFetch from "../../../hooks/useFetch";
import Loader from "../../../components/common/Loader";
import Error from "../../../components/common/Error";

export default function EditItem({ id, showModal, onHide, response, index }) {
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
      itemName: "",
      description: "",
      price: "",
      quantity: "",
      dimensions: "",
      link: "",
      ordered: false,
    },
  });

  // Fetch item data
  useEffect(() => {
    if (response) {
      reset(response);
    }
  }, [response, reset]);

  // Update existing item
  const onSubmit = async (data) => {
    try {
      setApiError(null);
      await itemService.put(data, id, index);
      reset({ ...data });
    } catch (err) {
      const apiErrors = err.response?.data;
      if (apiErrors && typeof apiErrors === "object") {
        Object.keys(apiErrors).forEach((field) => {
          setError(field, { type: "server", message: apiErrors[field] });
        });
      } else {
        setApiError(apiErrors || "Item update failed");
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
            <label htmlFor="itemName" className="form-label">
              Item Name
            </label>
            <input
              {...register("itemName")}
              type="text"
              aria-describedby="itemNameError"
              className="signup-form form-control"
              name="itemName"
            />
            {errors.itemName && (
              <small className="text-warning text-sm">
                {errors.itemName.message}
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
          <div className="col-md-5 mb-1 pt-2">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              {...register("price")}
              type="text"
              inputMode="decimal"
              placeholder="0.00"
              aria-describedby="priceError"
              className="signup-form form-control"
              name="price"
            />
            {errors.price && (
              <small className="text-warning text-sm">
                {errors.price.message}
              </small>
            )}
          </div>
          <div className="col-md-5 mb-1 pt-2">
            <label htmlFor="quantity" className="form-label">
              Quantity
            </label>
            <input
              {...register("quantity")}
              type="number"
              min="0"
              placeholder="0"
              aria-describedby="quantityError"
              className="signup-form form-control"
              name="quantity"
            />
            {errors.quantity && (
              <small className="text-warning text-sm">
                {errors.quantity.message}
              </small>
            )}
          </div>
          <div className="mb-1 pt-2">
            <label htmlFor="dimensions" className="form-label">
              Dimensions
            </label>
            <input
              {...register("dimensions")}
              type="text"
              className="signup-form form-control"
              aria-describedby="dimensionsError"
              name="dimensions"
            />
            {errors.dimensions && (
              <small className="text-warning text-sm">
                {errors.dimensions.message}
              </small>
            )}
          </div>
          <div className="mb-1 pt-2">
            <label htmlFor="link" className="form-label">
              Link
            </label>
            <input
              {...register("link")}
              type="text"
              className="signup-form form-control"
              aria-describedby="linkError"
              name="link"
            />
            {errors.link && (
              <small className="text-warning text-sm">
                {errors.link.message}
              </small>
            )}
          </div>
          <div className="col-md-5 mb-1 pt-2">
            <label htmlFor="ordered" className="form-label">
              Item Ordered?
            </label>

            <input
              {...register("ordered")}
              type="checkbox"
              className="signup-form ms-2"
              aria-describedby="orderedError"
              name="ordered"
            />
            {errors.ordered && (
              <small className="text-warning text-sm">
                {errors.ordered.message}
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
