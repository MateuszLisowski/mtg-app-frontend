import React, { Component } from "react";
import { toast } from "react-toastify";
import { CardForm } from "../components/CardForm";
import { defaultOptions } from "../constants/toastifyOptions";

export class AddCard extends Component {
  addCard = async cardData => {
    fetch("http://localhost:3000/card/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(cardData)
    })
      .then(res => res.json())
      .then(({ message, status }) => {
        status === 400
          ? toast.error(message, defaultOptions)
          : toast.success("Card added to database", defaultOptions);
      })
      .catch(err => {
        toast.error(err, defaultOptions);
      });
  };

  render() {
    return (
      <>
        <h1>Fill form below to add card to database</h1>
        <CardForm onClick={this.addCard} buttonText={"Add card"} />
      </>
    );
  }
}
