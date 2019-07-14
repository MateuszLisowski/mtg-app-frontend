import React from "react";

export const Textarea = ({ name, label, placeholder, onChange, value }) => {
  return (
    <>
      <label htmlFor={label} className="flexCentered marginMedium">
        {name}
        <textarea
          className="textArea"
          type="textarea"
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
