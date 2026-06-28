import React, { useState } from "react";

export default function Select({ props, data, selectKey, value, select }) {
  const [selected, setSelected] = useState(" ");
  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  return (
    <select
      props="true"
      className="form-select form-control"
      value={selected}
      onChange={handleChange}
    >
      <option>{"Select " + `${select}`}</option>
      {data?.map((response) => (
        <option key={response[selectKey]} value={response[value]}>
          {response[value]}
        </option>
      ))}
    </select>
  );
}
