import React, { Component } from "react";
import styles from "./CardList.module.scss";
import Cards from "../Cards/Cards";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default class CardList extends Component {
  state = {
    cityName: [
      { city_id: 2643744 },
      { city_id: 4749005 },
      { city_id: 4219762 },
    ],
    threecities: [],
  };

  componentDidMount() {
    let string = "";
    this.state.cityName.forEach((city) => (string += `${city.city_id},`));
    fetch(
      `https://api.openweathermap.org/data/2.5/group?id=${string}&units=metric&appid=0f33f5c78acf44e7d38b5f6706f6f59d`
    )
      .then((response) => response.json())

      .then((cities) => {
        this.setState({ threecities: cities["list"] });
      });
  }
  render() {
    console.log(this.state.threecities);
    return (
      <>
        <div className={styles.top}>WEATHER APP</div>
        <section className={styles.card}>
          {this.state.threecities.map((city, index) => (
            <Cards city={city} key={index} />
          ))}
        </section>
      </>
    );
  }
}
