import React, { Component } from "react";
import style from "../NavBar/NavBar.module.scss";
import NavItems from "../NavBar/NavItems/NavItems";

export default class NavBar extends Component {
  render() {
    return (
      <div className={style.top}>
        <NavItems route="home" name="weatherApp" />
        <NavItems route="quiz" name="quizApp" />
        <NavItems route="newestreleases" name="football" />
      </div>
    );
  }
}
