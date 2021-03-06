import React, { Component } from "react";
import { toast } from "react-toastify";
import { CardForm } from "../components/CardForm";
import { Search } from "../components/formElements/Search";
import { defaultOptions } from "../constants/ToastifyOptions";
import { URLS } from "../constants/ApiUrls";

export class UpdateCard extends Component {
  state = {
    name: "",
    types: "",
    keywords: "",
    text: "",
    tournamentLegal: false,
    attack: null,
    defense: null,
    searchedCard: "",
    foundCardId: null
  };

  handleInput = (event, inputName) => {
    const { value, type, checked } = event.target;

    this.setState({
      [inputName]: type === "checkbox" ? checked : value
    });
  };

  searchForCard = () => {
    const { searchedCard } = this.state;

    fetch(`${URLS.GET_CARD}${searchedCard}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(({ message, status, card }) => {
        if (!status || status === 400 || status === 500) {
          toast.error("something went wrong please try again", defaultOptions);
        } else {
          const {
            _id,
            name,
            types,
            keywords,
            text,
            tournamentLegal,
            attack,
            defense
          } = card;

          this.setState(
            {
              foundCardId: _id,
              name,
              types,
              keywords,
              text,
              tournamentLegal,
              attack,
              defense
            },
            () => {
              toast.success(message, defaultOptions);
            }
          );
        }
      })
      .catch(error => {
        toast.error(error, defaultOptions);
      });
  };

  updateCard = () => {
    const {
      foundCardId,
      name,
      types,
      keywords,
      text,
      tournamentLegal,
      attack,
      defense
    } = this.state;

    if (!foundCardId) {
      toast.error("Please first search for a card", defaultOptions);
    } else {
      fetch(URLS.UPDATE_CARD, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          foundCardId,
          name,
          types,
          keywords,
          text,
          tournamentLegal,
          attack,
          defense
        })
      })
        .then(res => res.json())
        .then(({ message, status }) => {
          if (status === 400 || status === 500) {
            toast.error(message, defaultOptions);
          } else {
            toast.success(message, defaultOptions);
            this.setState({ foundCardId: null });
          }
        })
        .catch(err => {
          toast.error(err, defaultOptions);
        });
    }
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
      searchedCard,
      foundCardId
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
          onClick={this.searchForCard}
          disabled={!searchedCard}
        >
          Search for a card
        </button>
        {foundCardId && (
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
            isDisabled={!Boolean(name && types && text)}
          />
        )}
      </>
    );
  }
}
