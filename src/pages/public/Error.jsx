import React from "react";
import "../public/Error.css";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <div className="error d-flex col-12 d-flex row p-0 m-0 error-image 100vh">
        <div className="card p-5 d-flex columns align-items-center justify-content-center">
          <div className="card-body m-5 text-center p-5 ">
            <h1 className="error-status pb-lg-1 pb-1">404</h1>
            <p className="pb-lg-4 pb-4">Page not found</p>
            <Link className="ps-0 pe-0" to="/home">
              <Button
                colour="outline-btn"
                text="BACK TO HOME"
                arrow="false"
              ></Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
