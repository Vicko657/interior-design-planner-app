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
    return (
      <select
        {...register(optionName)}
        className="form-select form-control"
        value={selected}
        onChange={handleChange}
      >
        <option>{"Select " + `${select}`}</option>
        {data?.map((response) => (
          <option key={response[selectKey]} value={response[selectKey]}>
            {response[value]}
          </option>
        ))}
      </select>
    );
  } else {
    return (
      <select
        className={`form-select form-control ${cn}`}
        value={selected}
        onChange={(e) => onChange(event.target.value)}
      >
        <option>{"Select " + `${select}`}</option>
        {data?.map((response) => (
          <option key={response[selectKey]} value={response[selectKey]}>
            {response[value]}
          </option>
        ))}
      </select>
    );
  }
}
