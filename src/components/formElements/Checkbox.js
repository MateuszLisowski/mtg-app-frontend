import React from "react";

export const Checkbox = ({ name, label, onChange, value }) => {
  return (
    <>
      <label htmlFor={label} className="flexCentered marginMedium">
        {name}
        <input
          className="checkbox"
          type="checkbox"
          name={label}
          onChange={event => onChange(event, label)}
          value={value}
        />
      </label>
    </>
  );
};
