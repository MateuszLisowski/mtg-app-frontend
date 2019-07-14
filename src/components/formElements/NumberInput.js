import React from "react";

export const NumberInput = ({ name, label, onChange, value }) => {
  return (
    <>
      <label htmlFor={label} className="flexCentered marginMedium">
        {name}
        <input
          className="numberInput marginMedium"
          type="number"
          name={label}
          onChange={event => onChange(event, label)}
          checked={value}
          min="-10"
          max="25"
        />
      </label>
    </>
  );
};
