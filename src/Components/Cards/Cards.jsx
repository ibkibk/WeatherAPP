import React, { Component } from "react";
import style from "./Cards.module.scss";

export default class Cards extends Component {
  render() {
    return (
      <div className={style.main}>
        <div className={style.box}>
          <h1>{this.props.city.name}</h1>
          <h2>{Math.round(this.props.city.main.temp)}°c</h2>
          <h2>Humidity {this.props.city.main.humidity}%</h2>
          <h2>Min {Math.round(this.props.city.main.temp_min)}°c</h2>
          <h2>Max {Math.round(this.props.city.main.temp_max)}°c</h2>
        </div>
      </div>
    );
  }
}
