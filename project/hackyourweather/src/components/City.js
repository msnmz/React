import React from "react";
import "../styles/City.css";
import CityHeader from "./CityHeader";
import CityWeather from "./CityWeather";

function City(props) {
  return (
    <div className="city">
      <CityHeader name={props.city.name} country={props.city.country} />
      <CityWeather
        title={props.weather.title}
        subtitle={props.weather.subtitle}
      />
    </div>
  );
}

export default City;
