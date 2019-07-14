import React from "react";

export const Checkbox = ({ name, label, onChange, value }) => {
  return (
    <>
      <label htmlFor={label}>
        {name}
        <input
          // className="searchbar"
          type="checkbox"
          name={label}
          onChange={event => onChange(event, label)}
          value={value}
        />
      </label>
    </>
  );
};
