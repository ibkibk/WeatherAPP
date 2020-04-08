import React, { Component } from "react";
import style from "./Cards.module.scss";


export default class Cards extends Component {
    render() {
        return (
            <div className={style.main}>
                <div className={style.box}>
                    <h1>{this.props.city.name}</h1>
                    <p>{this.props.city.main.temp}</p>
                    <h2> {this.props.city.main.humidity}</h2>
                    <h2>{this.props.city.main.temp_min}</h2>
                    <p>{this.props.city.main.temp_max}</p> 
                
                </div>
            </div>
        );
    }
}








