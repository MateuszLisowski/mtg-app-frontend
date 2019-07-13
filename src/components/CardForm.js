import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { TextInput } from "./formElements/TextInput";
{
  /* <FontAwesomeIcon icon={faSearch} color="black" /> */
}

export class CardForm extends Component {
  state = {
    name: "",
    types: "",
    keywords: "",
    text: "",
    tournamentLegal: null,
    attack: null,
    defense: null
  };

  click = async () => {
    fetch("http://localhost:3000/card/getAll", {
      method: "GET",
      headers: {
        "Content-type": "application/json;"
      }
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <TextInput
          name="Card name"
          label="card-name"
          placeholder="Enter card name"
        />
        <TextInput
          name="Types"
          label="types"
          placeholder="eg. Legendary Creature Wolf"
        />
         <TextInput
          name="Keywords"
          label="keywords"
          placeholder="eg. Lifelink, Deatchtouch, Vigilance"
        />
      </>
    );
  }
}
