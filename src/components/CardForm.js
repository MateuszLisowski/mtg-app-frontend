import React, { Component } from "react";
import { TextInput } from "./formElements/TextInput";
import { Textarea } from "./formElements/Textarea";
import { Checkbox } from "./formElements/Checkbox";
import { NumberInput } from "./formElements/NumberInput";

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
    const { onClick, buttonText } = this.props;

    const isDisabled = !Boolean(name && types && keywords && text);

    return (
      <>
        <section className="flexHorizontal">
          <section>
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
          </section>
          <section>
            <Textarea
              name="Card text"
              label="text"
              placeholder="eg. At the beginning of your upkeep, flip a coin. If you lose the flip, Mana Crypt deals 3 damage to you."
              onChange={this.handleInput}
              value={text}
            />
            <Checkbox
              name="Tournament Legal"
              label="tournamentLegal"
              onChange={this.handleInput}
              value={tournamentLegal}
            />
            <section className="flexHorizontal">
              <NumberInput
                name="Attack"
                label="attack"
                onChange={this.handleInput}
                value={attack}
              />
              <NumberInput
                name="Defense"
                label="defense"
                onChange={this.handleInput}
                value={defense}
              />
            </section>
          </section>
        </section>
        <button
          className="btn"
          onClick={() => onClick(this.state)}
          disabled={isDisabled}
        >
          {buttonText}
        </button>
      </>
    );
  }
}
