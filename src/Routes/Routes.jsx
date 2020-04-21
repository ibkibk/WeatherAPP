import React, { Component } from "react";
import { Router, Redirect, globalHistory } from "@reach/router";
import QuizList from "../QuizList/QuizList";
import Headers from "../Components/Header/Header";
import CardList from "../Components/CardList/CardList";
import Quiz from "../Quiz/Quiz";
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Quiz path="quiz" />
        <QuizList path="quiz" />
        {/* <Headers path="home" /> */}
        <CardList path="home" />
      </Router>
    );
  }
}
