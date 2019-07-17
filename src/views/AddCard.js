import React, { Component } from "react";
import { toast } from "react-toastify";
import { CardForm } from "../components/CardForm";
import { defaultOptions } from "../constants/ToastifyOptions";
import { URLS } from "../constants/ApiUrls";

export class AddCard extends Component {
  state = {
    name: "",
    types: "",
    keywords: "",
    text: "",
    tournamentLegal: false,
    attack: null,
    defense: null
  };

  handleInput = (event, inputName) => {
    const { value, type, checked } = event.target;

    this.setState({
      [inputName]: type === "checkbox" ? checked : value
    });
  };

  addCard = () => {
    fetch(URLS.ADD_CARD, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(({ message, status }) => {
        status === 400 || status === 500
          ? toast.error(message, defaultOptions)
          : toast.success("Card added to database", defaultOptions);
      })
      .catch(err => {
        toast.error(err, defaultOptions);
      });
  };

  render() {
    const {
      name,
      types,
      keywords,
      text,
      tournamentLegal,
      attack,
      defense
    } = this.state;
    return (
      <>
        <h1>Fill form below to add card to database</h1>
        <CardForm
          onClick={this.addCard}
          buttonText={"Add card"}
          handleInput={this.handleInput}
          name={name}
          types={types}
          keywords={keywords}
          text={text}
          tournamentLegal={tournamentLegal}
          attack={attack}
          defense={defense}
          isDisabled={!Boolean(name && types && text)}
        />
      </>
    );
  }
}
