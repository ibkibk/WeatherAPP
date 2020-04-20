import React, { Component } from "react";
import style from "./Cards.module.scss";

export default class Cards extends Component {
  render() {
    return (
      <div className={style.main}>
        <div className={style.box}>
          <h1>{this.props.city.name}</h1>
          <p>{Math.round(this.props.city.main.temp)}°c</p>
          <h2> {this.props.city.main.humidity}</h2>
          <h2>{Math.round(this.props.city.main.temp_min)}°c</h2>
          <p>{Math.round(this.props.city.main.temp_max)}°c</p>
        </div>
      </div>
    );
  }
}
