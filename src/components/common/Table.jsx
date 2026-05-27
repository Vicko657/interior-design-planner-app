import React, { useState } from "react";
import "./Table.css";

export default function Table({ headers, rows }) {
  return (
    <>
      <div className="table-responsive">
        <table className="table align-middle table-hover">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} scope="col">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="table-group-divider">{rows}</tbody>
        </table>
      </div>
    </>
  );
}
