import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => (
  <>
    <h1>Welcome to MTG application!</h1>
    <h2>Click button to perform action</h2>
    <section className="search-buttons">
      <Link to="/card/add">
        <button className="btn">ADD CARD</button>
      </Link>
      <Link to="/card/update">
        <button className="btn">UPDATE CARD</button>
      </Link>
      <Link to="/card/search">
        <button className="btn">SEARCH FOR CARD</button>
      </Link>
    </section>
  </>
);
