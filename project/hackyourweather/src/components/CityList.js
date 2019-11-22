import React from "react";
import "../styles/CityList.css";
import City from "./City";

function CityList(props) {
  return (
    <ul className="city-list">
      {props.cities.map((city, idx) => (
        <City
          key={"city_" + idx}
          city={city.city}
          weather={city.weather}
          details={city.details}
        />
      ))}
    </ul>
  );
}

export default CityList;
