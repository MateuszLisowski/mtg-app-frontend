import React from "react";
import { CardForm } from "../CardForm";

export const TextInput = ({ name, label, placeholder }) => {
  return (
    <>
      <label for={label}>
        {name}
        <input
          class="searchbar"
          type="text"
          placeholder={placeholder}
          name={label}
        />
      </label>
    </>
  );
};
