import React from "react";
import "../styles/City.css";
import CityHeader from "./CityHeader";
import CityWeather from "./CityWeather";
import CityDetailList from "./CityDetailList";

function City(props) {
  return (
    <div className="city">
      <CityHeader name={props.city.name} country={props.city.country} />
      <CityWeather
        title={props.weather.title}
        subtitle={props.weather.subtitle}
      />
      <CityDetailList details={props.details} />
    </div>
  );
}

export default City;
