import React from "react";
import ForamttedDate from "./ForamttedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description} />
        </div>
        <h1 className="col-6 city">{props.data.city}</h1>
      </div>
      <div className="row">
        <div className="col-6">
          <span className="temp">{Math.round(props.data.temperature)}°</span>
          <span className="celcius">C </span>
          <span className="dash">| </span>
          <span className="fah">F</span>
        </div>

        <div className="col-6 date">
          <ForamttedDate date={props.data.date} />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ul>
            <li className="feelslike">
              Feels Like: {Math.round(props.data.feelslike)}°
            </li>
            <li className="humidity">Humidity: {props.data.humidity}%</li>
            <li className="wind">Wind: {Math.round(props.data.wind)} km/hr</li>
          </ul>
        </div>
        <div className="col-6 description"> {props.data.description}</div>
      </div>
    </div>
  );
}
