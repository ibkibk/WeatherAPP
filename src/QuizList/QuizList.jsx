import React, { Component } from "react";
import styles from "../QuizList/QuizList.module.scss";
import { quizData } from "../static/QuizData";

export default class QuizList extends Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false,
  };

  loadQuizData = () => {
    this.setState({
      questions: quizData[this.state.currentQuestion].question,
      answer: quizData[this.state.currentQuestion].answer,
      options: quizData[this.state.currentQuestion].options,
    });
  };

  componentDidMount() {
    this.loadQuizData();
  }
  nextQuestionHandler = () => {
    // console.log('test')
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
    });
    // console.log(this.state.currentQuestion);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState({
        disabled: true,
        questions: quizData[this.state.currentQuestion].question,
        options: quizData[this.state.currentQuestion].options,
        answer: quizData[this.state.currentQuestion].answer,
      });
    }
  };
  checkAnswer = (answer) => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finishHandler = () => {
    if (this.state.currentQuestion === quizData.length - 1) {
      this.setState({
        isEnd: true,
      });
    }
  };
  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;

    if (isEnd) {
      return (
        <div className={styles.result}>
          <h3 className={styles.A}>
            Game Over<br></br> score:{this.state.score}{" "}
          </h3>
          <div className={styles.parag}>
            The correct answers
            <ul>
              {quizData.map((item, index) => (
                <li className={styles.first} key={index}>
                  {item.answer}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.B}>
          <div className={styles.App}>
            <h1>{this.state.questions} </h1>
            <span>{`Questions ${currentQuestion}  out of ${
              quizData.length - 1
            } remaining `}</span>
            {options.map((option) => (
              <p
                key={option.id}
                className={`styles.second ${
                  myAnswer === option ? "selected" : null
                }`}
                onClick={() => this.checkAnswer(option)}
              >
                {option}
              </p>
            ))}
            {currentQuestion < quizData.length - 1 && (
              <button
                className={styles.third}
                disabled={this.state.disabled}
                onClick={this.nextQuestionHandler}
              >
                Next
              </button>
            )}
            {/* //adding a finish button */}
            {currentQuestion === quizData.length - 1 && (
              <button className={styles.forth} onClick={this.finishHandler}>
                Finish
              </button>
            )}
          </div>
        </div>
      );
    }
  }
}
