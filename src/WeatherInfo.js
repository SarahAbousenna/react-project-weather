import React from "react";
import ForamttedDate from "./ForamttedDate";
import WeatherIcon from "./WeatherIcon.js";
import TemperatureConversion from "./TemperatureConversion";
// import FeelsLikeConversion from "./FeelsLikeConversion";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} size={52} />
        </div>
        <h1 className="col-6 city">{props.data.city}</h1>
      </div>
      <div className="row">
        <div className="col-6">
          <span className="temp">
            <TemperatureConversion celsius={props.data.temperature} />
          </span>
        </div>

        <div className="col-6 date">
          <ForamttedDate date={props.data.date} />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ul>
            {/* <li className="feelslike">
              <FeelsLikeConversion celsiusFeelsLike={props.data.main.feels_like} />
            </li> */}
            <li className="humidity">Humidity: {props.data.humidity}%</li>
            <li className="wind">Wind: {Math.round(props.data.wind)} km/hr</li>
          </ul>
        </div>
        <div className="col-6 description"> {props.data.description}</div>
      </div>
    </div>
  );
}
