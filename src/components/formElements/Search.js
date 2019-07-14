import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const Search = ({ name, label, placeholder, onChange, value }) => {
  return (
    <>
      <label htmlFor={label} className="marginMedium">
        <input
          className="textInput"
          type="search"
          placeholder={placeholder}
          name={label}
          required
          onChange={event => onChange(event, label)}
          value={value}
        />
        <FontAwesomeIcon icon={faSearch} color="black" />
      </label>
    </>
  );
};
