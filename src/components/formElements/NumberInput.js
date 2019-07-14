import React from "react";

export const NumberInput = ({ name, label, placeholder, onChange, value }) => {
  return (
    <>
      <label htmlFor={label}>
        {name}
        <input
          // className="searchbar"
          type="number"
          placeholder={placeholder}
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
