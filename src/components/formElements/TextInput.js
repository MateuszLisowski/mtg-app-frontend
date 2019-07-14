import React from "react";

export const TextInput = ({ name, label, placeholder, onChange, value }) => {
  return (
    <>
      <label htmlFor={label} className="flexCentered marginMedium">
        {name}
        <input
          className="textInput"
          type="text"
          placeholder={placeholder}
          name={label}
          required
          onChange={event => onChange(event, label)}
          value={value}
        />
      </label>
    </>
  );
};
