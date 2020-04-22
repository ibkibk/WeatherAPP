import React, { Component } from "react";
import style from "../NavBar/NavBar.module.scss";
import NavItems from "../NavBar/NavItems/NavItems";

export default class NavBar extends Component {
  render() {
    return (
      <div className={style.top}>
        <NavItems route="home" name="WEATHER-APP" />
        <NavItems route="quiz" name="QUIZ-APP" />
        <NavItems route="newestreleases" name="FOOTBALL " />
      </div>
    );
  }
}
