import React, { Component } from "react";
import styles from "../Quiz/Quiz.module.scss";
import QuizList from "../QuizList/QuizList";

export default class Quiz extends Component {
  render() {
    return (
      <div>
        <div className={styles.head}>QUIZ-APP</div>
        <QuizList />
      </div>
    );
  }
}
