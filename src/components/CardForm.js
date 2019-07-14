import React from "react";
import { TextInput } from "./formElements/TextInput";
import { Textarea } from "./formElements/Textarea";
import { Checkbox } from "./formElements/Checkbox";
import { NumberInput } from "./formElements/NumberInput";

export const CardForm = ({
  onClick,
  buttonText,
  name,
  types,
  keywords,
  text,
  tournamentLegal,
  attack,
  defense,
  handleInput
}) => {
  const isDisabled = !Boolean(name && types && keywords && text);

  return (
    <>
      <section className="flexHorizontal">
        <section>
          <TextInput
            name="Card name"
            label="name"
            placeholder="Enter card name"
            onChange={handleInput}
            value={name}
          />
          <TextInput
            name="Types"
            label="types"
            placeholder="eg. Legendary Creature Wolf"
            onChange={handleInput}
            value={types}
          />
          <TextInput
            name="Keywords"
            label="keywords"
            placeholder="eg. Lifelink, Deatchtouch, Vigilance"
            onChange={handleInput}
            value={keywords}
          />
        </section>
        <section>
          <Textarea
            name="Card text"
            label="text"
            placeholder="eg. At the beginning of your upkeep, flip a coin. If you lose the flip, Mana Crypt deals 3 damage to you."
            onChange={handleInput}
            value={text}
          />
          <Checkbox
            name="Tournament Legal"
            label="tournamentLegal"
            onChange={handleInput}
            value={tournamentLegal}
          />
          <section className="flexHorizontal">
            <NumberInput
              name="Attack"
              label="attack"
              onChange={handleInput}
              value={attack}
            />
            <NumberInput
              name="Defense"
              label="defense"
              onChange={handleInput}
              value={defense}
            />
          </section>
        </section>
      </section>
      <button className="btn" onClick={onClick} disabled={isDisabled}>
        {buttonText}
      </button>
    </>
  );
};
