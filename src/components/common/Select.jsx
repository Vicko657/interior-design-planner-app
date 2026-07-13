import React, { useState } from "react";

export default function Select({
  register,
  optionName,
  data,
  selectKey,
  value,
  select,
  cn,
  onChange,
}) {
  const [selected, setSelected] = useState(" ");
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  if (optionName !== null && register !== null) {
    // For form options
    return (
      <select
        {...register(optionName)}
        className="form-select form-control"
        value={selected}
        onChange={handleChange}
      >
        <option value=" ">{"Select " + `${select}`}</option>
        {data?.map((response) => (
          <option key={response[selectKey]} value={response[selectKey]}>
            {response[value]}
          </option>
        ))}
      </select>
    );
  } else {
    // For general page options
    return (
      <select
        className={`form-select form-control ${cn}`}
        value={selected}
        onChange={(event) => {
          if (event.target.value !== " ") {
            onChange(event.target.value, setSelected(event.target.value));
          } else {
            onChange(null, setSelected(select));
          }
        }}
      >
        <option value=" ">{"Select " + `${select}`}</option>
        {data?.map((response) => (
          <option key={response[selectKey]} value={response[selectKey]}>
            {response[value]}
          </option>
        ))}
      </select>
    );
  }
}
