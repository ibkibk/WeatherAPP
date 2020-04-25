import React, { Component } from "react";
import { Router, Redirect, globalHistory } from "@reach/router";
import QuizList from "../QuizList/QuizList";
import Headers from "../Components/Header/Header";
import CardList from "../Components/CardList/CardList";
import Quiz from "../Quiz/Quiz";
import PlayerList from "../Components/PlayerList/PlayerList";
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Quiz path="quiz" />
        <CardList path="home" />
        <PlayerList path="football" />
        {/* <QuizList path="quiz" /> */}
        {/* <Headers path="home" /> */}
      </Router>
    );
  }
}
