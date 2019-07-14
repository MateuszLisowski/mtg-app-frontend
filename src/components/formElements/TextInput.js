import React from "react";

export const TextInput = ({ name, label, placeholder, onChange, value }) => {
  return (
    <>
      <label htmlFor={label}>
        {name}
        <input
          className="searchbar"
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
