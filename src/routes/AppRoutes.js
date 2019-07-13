import React, { Component } from "react";
import { Route } from "react-router-dom";
import { HomePage } from "../views/HomePage";
import { AddCard } from "../views/AddCard";
import { UpdateCard } from "../views/UpdateCard";
import { SearchForCard } from "../views/SearchForCard";

export class AppRoutes extends Component {
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
