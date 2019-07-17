import React, { Component } from "react";
import { toast } from "react-toastify";
import { CardForm } from "../components/CardForm";
import { MtgCard } from "../components/MtgCard";
import { defaultOptions } from "../constants/ToastifyOptions.js";
import { URLS } from "../constants/ApiUrls";

export class SearchForCard extends Component {
  state = {
    name: "",
    types: "",
    keywords: "",
    text: "",
    tournamentLegal: false,
    attack: null,
    defense: null,
    foundCards: []
  };

  handleInput = (event, inputName) => {
    const { value, type, checked } = event.target;

    this.setState({
      [inputName]: type === "checkbox" ? checked : value
    });
  };

  searchForCards = () => {
    const {
      name,
      types,
      keywords,
      text,
      tournamentLegal,
      attack,
      defense
    } = this.state;

    const searchCriteria = {
      name,
      types,
      keywords,
      text,
      tournamentLegal,
      attack,
      defense
    };

    fetch(`${URLS.GET_CARDS}${JSON.stringify(searchCriteria)}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(({ message, status, cards }) => {
        if (status === 400 || status === 500) {
          toast.error(message, defaultOptions);
        } else {
          toast.success(message, defaultOptions);
          this.setState({ foundCards: cards });
        }
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
      defense,
      foundCards
    } = this.state;

    return (
      <>
        <h1>Search for a card based on your preferences</h1>
        <CardForm
          onClick={this.searchForCards}
          buttonText={"Search"}
          handleInput={this.handleInput}
          name={name}
          types={types}
          keywords={keywords}
          text={text}
          tournamentLegal={tournamentLegal}
          attack={attack}
          defense={defense}
          isDisabled={Boolean(
            !name && !types && !keywords && !text && !attack && !defense
          )}
        />
        <section className="flexHorizontal flexWrap marginMedium">
          {Boolean(foundCards.length) &&
            foundCards.map(
              ({ attack, defense, keywords, name, text, tournamentLegal, types }) => (
                <MtgCard
                  attack={attack}
                  defense={defense}
                  keywords={keywords}
                  name={name}
                  text={text}
                  types={types}
                />
              )
            )}
        </section>
      </>
    );
  }
}
