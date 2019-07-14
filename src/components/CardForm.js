import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { TextInput } from "./formElements/TextInput";
import { Textarea } from "./formElements/Textarea";
import { Checkbox } from "./formElements/Checkbox";
import { NumberInput } from "./formElements/NumberInput";

{
  /* <FontAwesomeIcon icon={faSearch} color="black" /> */
}

export class CardForm extends Component {
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
    const { onClick } = this.props;

    const isDisabled = !Boolean(name && types && keywords && text);

    return (
      <>
        <h1>Fill form below to add card to database</h1>
        <TextInput
          name="Card name"
          label="name"
          placeholder="Enter card name"
          onChange={this.handleInput}
          value={name}
        />
        <TextInput
          name="Types"
          label="types"
          placeholder="eg. Legendary Creature Wolf"
          onChange={this.handleInput}
          value={types}
        />
        <TextInput
          name="Keywords"
          label="keywords"
          placeholder="eg. Lifelink, Deatchtouch, Vigilance"
          onChange={this.handleInput}
          value={keywords}
        />
        <Textarea
          name="Card text"
          label="text"
          placeholder="eg. Lifelink, Deatchtouch, Vigilance"
          onChange={this.handleInput}
          value={text}
        />
        <Checkbox
          name="Tournament Legal"
          label="tournamentLegal"
          onChange={this.handleInput}
          value={tournamentLegal}
        />
        <NumberInput
          name="Attack"
          label="attack"
          placeholder="eg. Lifelink, Deatchtouch, Vigilance"
          onChange={this.handleInput}
          value={attack}
        />
        <NumberInput
          name="Defense"
          label="defense"
          placeholder="eg. Lifelink, Deatchtouch, Vigilance"
          onChange={this.handleInput}
          value={defense}
        />
        <button
          className="btn"
          onClick={() => onClick(this.state)}
          disabled={isDisabled}
        >
          Add card
        </button>
      </>
    );
  }
}
