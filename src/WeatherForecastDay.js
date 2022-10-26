import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForcastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}° `;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForcastDay">{day()}</div>
      <div className="flex items-center justify-center h-12 ">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div className="WeatherForcastTemp">
        <span className="WeatherForcastMax">{maxTemp()}</span>
        <span className="WeatherForcastMin">{minTemp()}</span>
      </div>
    </div>
  );
}
