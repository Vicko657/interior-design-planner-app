import { React, useState, useEffect } from "react";
import ClientList from "./ClientList";
import "./Clients.css";
import Button from "../../../components/common/Button";
import clientService from "../../../api/services/clientService";
import useFetch from "../../../hooks/useFetch";
import Loader from "../../../components/common/Loader";
import Error from "../../../components/common/Error";
import AddClient from "./AddClient";

export default function Clients() {
  const [modalShow, setModalShow] = useState(false);
  const { data, loading, error } = useFetch(clientService.get);
  const [clientData, setClientData] = useState(null);

  // Fetch clients data
  (useEffect(() => {
    if (data) {
      setClientData(data);
    }
  }),
    [data]);

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  return (
    <>
      <div className="container-fluid users-clients w-100 p-4">
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
              btnfunction={() => setModalShow(true)}
            ></Button>
            <AddClient
              showModal={modalShow}
              onHide={() => setModalShow(false)}
              data={data}
            />
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
