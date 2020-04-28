import React, { Component } from "react";

export default class Quiz extends Component {
  state = {
    keyWord: "pizza",
    Answer: false,
  };

  handleChange = (e) => {
    if (e.target.value.toLowerCase() === this.state.keyWord) {
      this.setState({ Answer: true });
    } else this.setState({ Answer: false });
  };

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            quiz: "block",
            marginTop: "100px",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          <p>What is the most popular italian food?</p>
          <p>(hint:pizza)</p>
          <p>Type your answer </p>
          <input
            style={{ border: "2px solid black" }}
            type="text"
            onChange={this.handleChange}
          />
          {this.state.Answer ? <p>Correct answer</p> : <p>Incorrect answer</p>}
        </div>
      </React.Fragment>
    );
  }
}
