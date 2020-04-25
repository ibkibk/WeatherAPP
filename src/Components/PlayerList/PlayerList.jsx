import React, { Component } from "react";
import { playersData } from "../../static/PlayersData";
import Players from "../Players/Players";

export default class PlayerList extends Component {
  state = {
    availablePlayers: playersData,
    goalKeeper: 0,
    attaker: 0,
    defender: 0,
    midfielder: 0,
  };

  render() {
    return (
      <div>
        <Players />
      </div>
    );
  }
}
