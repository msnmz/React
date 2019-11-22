import React from "react";
import "../styles/City.css";
import CityHeader from "./CityHeader";

function City(props) {
  return (
    <div className="city">
      <CityHeader name={props.city.name} country={props.city.country} />
    </div>
  );
}

export default City;
