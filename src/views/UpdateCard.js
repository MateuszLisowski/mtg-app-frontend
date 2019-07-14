import React, { Component } from "react";
import { toast } from "react-toastify";
import { CardForm } from "../components/CardForm";
import { Search } from "../components/formElements/Search";
import { defaultOptions } from "../constants/toastifyOptions";

export class UpdateCard extends Component {
  state = {
    name: "",
    types: "",
    keywords: "",
    text: "",
    tournamentLegal: false,
    attack: null,
    defense: null,
    searchedCard: ""
  };

  handleInput = (event, inputName) => {
    const { value, type, checked } = event.target;

    this.setState({
      [inputName]: type === "checkbox" ? checked : value
    });
  };

  updateCard = async () => {
    // fetch("http://localhost:3000/card/add", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json"
    //   },
    //   body: JSON.stringify(this.state)
    // })
    //   .then(res => res.json())
    //   .then(({ message, status }) => {
    //     status === 400
    //       ? toast.error(message, defaultOptions)
    //       : toast.success("Card added to database", defaultOptions);
    //   })
    //   .catch(err => {
    //     toast.error(err, defaultOptions);
    //   });
  };

  render() {
    const {
      name,
      types,
      keywords,
      text,
      tournamentLegal,
      attack,
      defense,
      searchedCard
    } = this.state;
    return (
      <>
        <h1>Enter card name then update card informations</h1>
        <Search
          label="searchedCard"
          placeholder="search for a card"
          onChange={this.handleInput}
          value={searchedCard}
        />
        <button
          className="btn"
          // onClick={() => onClick(this.state)}
          // disabled={isDisabled}
        >
          Search for a card
        </button>
        <CardForm
          onClick={this.updateCard}
          buttonText={"Update card"}
          handleInput={this.handleInput}
          name={name}
          types={types}
          keywords={keywords}
          text={text}
          tournamentLegal={tournamentLegal}
          attack={attack}
          defense={defense}
        />
      </>
    );
  }
}
