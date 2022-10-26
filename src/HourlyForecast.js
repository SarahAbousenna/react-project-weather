import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeeklyForecast(props) {
  function Temp() {
    let temperature = Math.round(props.data.hourly.temp);
    return `${temperature}° `;
  }

  function day() {
    let hours = props.date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }

    let minutes = props.date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return (
      <div>
        {hours}:{minutes}
      </div>
    );
  }
  return (
    <div>
      <div className="WeatherForcastDay">{day()}</div>
      <div className="flex items-center justify-center h-12 ">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div className="WeatherForcastTemp">
        <span className="WeatherForcast">{Temp()}</span>
      </div>
    </div>
  );
}
