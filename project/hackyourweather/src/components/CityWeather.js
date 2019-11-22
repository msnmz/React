import React from "react";
import "../styles/CityWeather.css";

function CityWeather(props) {
  return (
    <div className="city-weather">
      <h2 className="city-weather-title">{props.title}</h2>
      <h6 className="city-weather-subtitle">{props.subtitle}</h6>
    </div>
  );
}

export default CityWeather;
