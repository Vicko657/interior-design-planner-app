import React, { useState } from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export default function Button({ colour, text, page, cn, arrow }) {
  if (arrow === "true") {
    return (
      <Link className="ps-0" to={"/" + page}>
        <button className={colour || cn}>
          {text}
          <span className="ms-2">
            <svg
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 28.2 9"
            >
              <path
                className={colour}
                d="M22,0c.2.2.4.3.5.5,1.5,1.4,3,2.7,4.7,3.9,0,0,0,0,0,0,0,0,0,0,0,0-1.6,1.2-3.1,2.6-4.6,4-.2.2-.3.3-.5.5.2-.1.4-.2.6-.4,1.8-1,3.5-2.2,5.1-3.4.2-.2.4-.5.4-.8,0-.3-.2-.6-.4-.8-1.6-1.2-3.4-2.3-5.1-3.3-.2-.1-.4-.2-.6-.4Z"
              />
              <path
                className={colour}
                d="M25,4.5c-.4,0-.8,0-1.3,0-3.8-.2-7.5-.4-11.3-.3-3.7,0-7.5.2-11.2.5-.4,0-.8,0-1.2.1.4,0,.8,0,1.3,0,3.8.2,7.5.4,11.3.3,3.7,0,7.5-.2,11.2-.5.4,0,.8,0,1.2-.1Z"
              />
            </svg>
          </span>
        </button>
      </Link>
    );
  } else {
    return (
      <div className="d-grid">
        <button type="submit" className={colour || cn}>
          {text}
        </button>
      </div>
    );
  }
}
