import React, { Component } from "react";
import style from "../Players/Players.module.scss";

export default class Players extends Component {
  render() {
    return (
      <div className={style.team}>
        <div className={style.goalKeeper}>Goalkeeper</div>
        <div className={style.defender}>Defender</div>
        <div className={style.midfield}>Midfielder</div>
        <div className={style.attaker}>Attaker</div>
      </div>
    );
  }
}
