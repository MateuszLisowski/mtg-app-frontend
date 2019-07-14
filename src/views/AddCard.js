import React, { Component } from "react";
import { CardForm } from "../components/CardForm";

export class AddCard extends Component {
  addCard = async cardData => {
    console.log(JSON.stringify(cardData));
    fetch("http://localhost:3000/card/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(cardData)
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <CardForm onClick={this.addCard} />
      </>
    );
  }
}
