import React from "react";
import ForamttedDate from "./ForamttedDate";
import WeatherIcon from "./WeatherIcon.js";
import TemperatureConversion from "./TemperatureConversion";
// import FeelsLikeConversion from "./FeelsLikeConversion";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="icon">
        <WeatherIcon code={props.data.icon} />
      </div>
      <div className="temp">
        <TemperatureConversion celsius={props.data.temperature} />
      </div>
      <h1 className="city">{props.data.city}</h1>

      <div className="date">
        <ForamttedDate date={props.data.date} />
      </div>
      <div className="info">
        <ul>
          <li className="description"> {props.data.description}</li>
          <li className="humidity">Humidity: {props.data.humidity}%</li>
          <li className="wind">Wind: {Math.round(props.data.wind)} km/hr</li>
        </ul>
      </div>
    </div>
  );
}
