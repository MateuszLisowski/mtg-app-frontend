import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const SearchForCard = () => {
  return (
    <>
      <label for="card-name">
        Card name
        <input
          class="searchbar"
          type="text"
          placeholder="Search..."
          name="card-name"
        />
        <FontAwesomeIcon icon={faSearch} color="black" />
      </label>
    </>
  );
};
