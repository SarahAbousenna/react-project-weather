import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";
import axios from "axios";

export default function DailyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="DailyForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForcastDay">{forecast[0].dt}</div>
            <WeatherIcon code={forecast[0].weather[0].icon} height={40} />
            <div className="WeatherForcastTemp">
              <span className="WeatherForcastMax">{forecast[0].temp.max}</span>
              <span className="WeatherForcastMin">{forecast[0].temp.min}</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "597c40c39084687093b091cd48b366f8";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${longitude}&lon=${latitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}