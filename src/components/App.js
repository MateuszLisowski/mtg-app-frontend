import React, { Component } from "react";
import { Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AddCard } from "./AddCard";
import { UpdateCard } from "./UpdateCard";
import { SearchForCard } from "./SearchForCard";
import "./styles.css";

export class App extends Component {
  render() {
    return (
      <>
        <main className="container">
          <Route path="/" exact component={HomePage} />
          <Route path="/card/add" exact component={AddCard} />
          <Route path="/card/update" exact component={UpdateCard} />
          <Route path="/card/search" exact component={SearchForCard} />
        </main>
      </>
    );
  }
}
