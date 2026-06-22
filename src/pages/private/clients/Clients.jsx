import { React, useState, useEffect } from "react";
import ClientList from "./ClientList";
import "./Clients.css";
import Button from "../../../components/common/Button";
import clients from "../../../data/clients.js";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import clientService from "../../../api/services/clientService";
import useFetch from "../../../hooks/useFetch";
import Loader from "../../../components/common/Loader";
import Error from "../../../components/common/Error";

export default function Clients() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [apiError, setApiError] = useState(null);
  const {
    register,
    reset,
    formState: { errors, isSubmitting },
    handleSubmit,
    setError,
  } = useForm();
  const { data, loading, error } = useFetch(clientService.get);
  const [clientData, setClientData] = useState(null);

  // Fetch clients data
  (useEffect(() => {
    if (data) {
      setClientData(data);
    }
  }),
    [data]);

  // Create new client with data
  const onSubmit = async (response) => {
    try {
      setApiError(null);
      await clientService.post(response);
      reset({ ...response });
    } catch (err) {
      const apiErrors = err.response?.data;
      if (apiErrors && typeof apiErrors === "object") {
        Object.keys(apiErrors).forEach((field) => {
          setError(field, { type: "server", message: apiErrors[field] });
        });
      } else {
        setApiError(apiErrors || "Client creation failed");
      }
    }
  };

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  return (
    <>
      <div className="container-fluid users-clients w-100 p-4">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h4 className="p-0 m-0 modal-title">New Client</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="newClient-form" onSubmit={handleSubmit(onSubmit)}>
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
                  name="firstName"
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
                  name="lastName"
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
                  name="emailAddress"
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
                  name="phoneNumber"
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
                  name="address"
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
                  name="notes"
                />
                {errors.notes && (
                  <small className="text-warning text-sm">
                    {errors.notes.message}
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
        <div className="row g-2 row-cols-1 pt-4">
          <div className="col-8 ps-4">
            <h3 className="page-title">Clients</h3>
          </div>
          <div className="col-4 mt-auto me-auto pe-5">
            <Button
              page="user/list"
              colour="outline-red-btn"
              cn="rounded-pill d-flex align-items-end ms-auto p-3 pt-2 pb-2"
              text="ADD CLIENT"
              btnfunction={handleShow}
            ></Button>
          </div>
        </div>
        <div className="row g-2 row-cols-1 pt-4">
          <div className="col-12">
            <ClientList clients={clientData?.content} />
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </>
  );
}
