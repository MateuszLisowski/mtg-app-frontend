import React, { Component } from "react";
import { toast } from "react-toastify";
import { CardForm } from "../components/CardForm";
import { defaultOptions } from "../constants/toastifyOptions";
import { Search } from "../components/formElements/Search";

export class UpdateCard extends Component {
  // updateCard = async cardData => {
  //   fetch("http://localhost:3000/card/add", {
  //     method: "PATCH",
  //     headers: {
  //       "Content-type": "application/json"
  //     },
  //     body: JSON.stringify(cardData)
  //   })
  //     .then(res => res.json())
  //     .then(({ message, status }) => {
  //       status === 400
  //         ? toast.error(message, defaultOptions)
  //         : toast.success("Card added to database", defaultOptions);
  //     })
  //     .catch(err => {
  //       toast.error(err, defaultOptions);
  //     });
  // };

  render() {
    return (
      <>
        <h1>Enter card name then update card informations</h1>
        <Search
          label="search"
          placeholder="search for a card"
          onChange={() => {}}
          value={null}
        />
        <button
          className="btn"
          // onClick={() => onClick(this.state)}
          // disabled={isDisabled}
        >
          Search for a card
        </button>
        {/* <CardForm onClick={this.updateCard} buttonText={"Update card"} /> */}
      </>
    );
  }
}
