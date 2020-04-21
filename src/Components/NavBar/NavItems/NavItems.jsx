import React, { Component } from "react";
import style from "./NavItems.module.scss";
import { Link } from "@reach/router";

export default class NavItems extends Component {
  render() {
    return (
      <div className={style.navitems}>
        <Link className={style.navitem} to={this.props.route}>
          {this.props.name}
        </Link>
      </div>
    );
  }
}
