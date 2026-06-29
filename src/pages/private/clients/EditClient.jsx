import { React, useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import Button from "../../../components/common/Button";
import clientService from "../../../api/services/clientService";

export default function EditClient({ id, showModal, onHide, data }) {
  const [apiError, setApiError] = useState(null);
  const {
    register,
    reset,
    formState: { errors, isSubmitting },
    handleSubmit,
    setError,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      address: "",
      notes: "",
    },
  });

  // Fetch clients data
  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data, reset]);

  // Update existing client data
  const onSubmit = async (response) => {
    try {
      setApiError(null);
      await clientService.update(response, id);
      onHide();
    } catch (err) {
      const apiErrors = err.response?.data;
      if (apiErrors && typeof apiErrors === "object") {
        Object.keys(apiErrors).forEach((field) => {
          setError(field, { type: "server", message: apiErrors[field] });
        });
      } else {
        setApiError(apiErrors || "Client update failed");
      }
    }
  };

  return (
    <Modal show={showModal} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <h4 className="p-0 m-0 modal-title">Edit Client</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          method="PUT"
          className="newClient-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          {apiError && <div className="alert alert-danger">{apiError}</div>}

          <div className="mb-1">
            <label htmlFor="firstName" className="form-label">
              <small>First name</small>
            </label>
            <input
              {...register("firstName")}
              type="text"
              className="signup-form form-control"
              autoComplete="given-name"
              aria-describedby="firstNameError"
              id="firstName"
            />
            {errors.firstName && (
              <small className="text-warning text-sm">
                {errors.firstName.message}
              </small>
            )}
          </div>
          <div className="mb-1 pt-2">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              {...register("lastName")}
              type="text"
              className="signup-form form-control"
              autoComplete="family-name"
              aria-describedby="lastNameError"
              id="lastName"
            />
            {errors.lastName && (
              <small className="text-warning text-sm">
                {errors.lastName.message}
              </small>
            )}
          </div>
          <div className="mb-1 pt-2">
            <label htmlFor="emailAddress" className="form-label">
              Email Address
            </label>
            <input
              {...register("emailAddress")}
              type="email"
              className="signup-form form-control"
              aria-describedby="emailError"
              autoComplete="email"
              id="emailAddress"
            />
            {errors.emailAddress && (
              <small className="text-warning text-sm">
                {errors.emailAddress.message}
              </small>
            )}
          </div>
          <div className="mb-1 pt-2">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              {...register("phoneNumber")}
              type="text"
              aria-describedby="phoneNumberError"
              className="signup-form form-control"
              autoComplete="mobile"
              id="phoneNumber"
            />
            {errors.phoneNumber && (
              <small className="text-warning text-sm">
                {errors.phoneNumber.message}
              </small>
            )}
          </div>
          <div className="mb-1 pt-2">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              {...register("address")}
              type="text"
              className="signup-form form-control"
              aria-describedby="addressError"
              autoComplete="address"
              id="address"
            />
            {errors.address && (
              <small className="text-warning text-sm">
                {errors.address.message}
              </small>
            )}
          </div>
          <div className="mb-1 pt-2">
            <label htmlFor="notes" className="form-label">
              Notes
            </label>
            <textarea
              {...register("notes")}
              type="text"
              className="signup-form form-control"
              id="notes"
            />
            {errors.notes && (
              <small className="text-warning text-sm">
                {errors.notes.message}
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
