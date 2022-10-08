import React, { useState } from "react";
import "./Weather.css";
import ForamttedDate from "./ForamttedDate";
import axios from "axios";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      feelslike: response.data.main.feels_like,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city ...."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" className="btn btn-primary" />
            </div>
          </div>
        </form>

        <div className="row mt-3">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
          </div>
          <h1 className="col-6 city">{weatherData.city}</h1>
        </div>
        <div className="row">
          <div className="col-6">
            <span className="temp">{Math.round(weatherData.temperature)}°</span>
            <span className="celcius">C </span>
            <span className="dash">| </span>
            <span className="fah">F</span>
          </div>

          <div className="col-6 date">
            <ForamttedDate date={weatherData.date} />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <ul>
              <li className="humidity">Humidity: {weatherData.humidity}%</li>
              <li className="wind">
                Wind: {Math.round(weatherData.wind)} km/hr
              </li>
              <li className="precipitation">
                Feels Like: {Math.round(weatherData.feelslike)}°
              </li>
            </ul>
          </div>
          <div className="col-6 description"> {weatherData.description}</div>
        </div>
      </div>
    );
  } else {
    let apiKey = "435798bac9b1a5fbf4f0fb0e3de3dbe8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading....";
  }
}
