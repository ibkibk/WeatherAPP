import React, { Component } from "react";
import styles from "./CardList.module.scss";
import Cards from "../Cards/Cards";

export default class CardList extends Component {
  state = {
    cityName: [
      { city_id: 2643744 },
      { city_id: 4749005 },
      { city_id: 4219762 },
    ],
    filteredcities: [],
  };

  componentDidMount() {
    // WebAuthnAssertion.temp
    // const kelvin = 273;
    let string = "";
    this.state.cityName.forEach((city) => (string += `${city.city_id},`));
    fetch(
      `https://api.openweathermap.org/data/2.5/group?id=${string}&appid=0f33f5c78acf44e7d38b5f6706f6f59d`
    )
      .then((response) => response.json())
      // .then(function(data){
      //    cities.data.celcious = Math.floor(data.main.temp - 273)
      // })
      .then((cities) => {
        this.setState({ filteredcities: cities["list"] });
      });
    // .then(celcious => celcious === kalvin - 275.15)
  }
  render() {
    console.log(this.state.filteredcities);
    return (
      <>
        <section className={styles.card}>
          {this.state.filteredcities.map((city, index) => (
            <Cards city={city} key={index} />
          ))}
        </section>
      </>
    );
  }
}
