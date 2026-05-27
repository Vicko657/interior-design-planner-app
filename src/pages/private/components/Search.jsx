import React from "react";
import SVG from "../../../components/SVG";
import "./Search.css";
export default function Search() {
  return (
    <>
      <form className="d-flex topbar-search" role="search">
        <div
          className="collapse collapse-horizontal"
          id="navbarToggleExternalContent"
        >
          <input
            className="form-control user-search"
            type="search"
            placeholder="Search Task"
            aria-label="Search"
          />
        </div>
        <button
          className="btn search-btn navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <SVG viewbox="0 0 28 30" path="search-icon" cn=" bi" />
        </button>
      </form>
    </>
  );
}
