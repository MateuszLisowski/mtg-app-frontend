import React, { Component } from "react";
import { Link } from "react-router-dom";

export class HomePage extends Component {
  // click = async () => {
  //   fetch("http://localhost:3000/card/getAll", {
  //     method: "GET",
  //     headers: {
  //       "Content-type": "application/json;"
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <>
        <main className="container">
          <section className="search-buttons">
            <Link to="/card/add">
              <button className="btn">
                ADD CARD
              </button>
            </Link>
            <Link to="/card/update">
              <button className="btn">
                UPDATE CARD
              </button>
            </Link>
            <Link to="/card/search">
              <button className="btn">
                SEARCH FOR CARD
              </button>
            </Link>
          </section>
        </main>
      </>
    );
  }
}
