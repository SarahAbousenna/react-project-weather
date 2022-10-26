import React from "react";

import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

import ForamttedDate from "./ForamttedDate";
import WeatherIcon from "./WeatherIcon.js";
// import FormattedSetRise from "./FormattedSetRise";
// import TemperatureConversion from "./TemperatureConversion";
import DailyForecast from "./DailyForecast";

export default function WeatherInfo(props) {
  return (
    <div>
      <p className="text-white text-xl font-extralight text-center">
        <ForamttedDate date={props.data.date} />
      </p>
      <div>
        <div className="flex items-center justify-center my-3">
          <p className="text-white text-5xl font-medium">{props.data.city}</p>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-center text-xl text-cyan-300 capitalize">
          <p>{props.data.description}</p>
        </div>
        <div className="flex items-center justify-between py-1 text-xl text-white">
          <WeatherIcon code={props.data.icon} size={10} />
          <p className="text-5xl"> {Math.round(props.data.temperature)}°C</p>
          <div className="flex flex-col space-y-2">
            <div className="flex font-light text-xs items-center justify-center">
              <UilTemperature size={18} className="mr-1" />
              Feels Like:
              <span className="font-medium ml-1">
                {Math.round(props.data.feels_like)}°C
              </span>
            </div>

            <div className="flex font-light text-xs items-center justify-center">
              <UilTear size={18} className="mr-1" />
              Humidity:
              <span className="font-medium ml-1">{props.data.humidity}%</span>
            </div>

            <div className="flex font-light text-xs items-center justify-center">
              <UilWind size={18} className="mr-1" />
              Wind:
              <span className="font-medium ml-1">
                {Math.round(props.data.wind)} km/h
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center space-x-2 text-white text-xs py-3">
          <UilSun />
          <p className="font-light text-xs mt-3 ">Sunrise</p>
          <span className="font-small "> 10°</span>
          <p className="font-light text-xs mt-3 ">|</p>

          <UilSunset />
          <p className="font-light text-xs mt-3 ">Sunset</p>
          <span className="font-small "> 10°</span>
          <p className="font-light text-xs mt-3 ">|</p>
          <UilArrowUp />
          <p className="font-light text-xs mt-3 ">High</p>
          <span className="font-small ">{Math.round(props.data.high)}° </span>
          <p className="font-light text-xs mt-3 ">|</p>
          <UilArrowDown />
          <p className="font-light text-xs mt-3 ">Low</p>
          <span className="font-small ">{Math.round(props.data.low)}° </span>
        </div>
        <div className="flex items-center justify-start mt-2">
          <p className="text-white font-medium uppercase">Weekly Forecast</p>
        </div>
        <hr className="mb-3 mt-0 text-white" />
      </div>
      <DailyForecast coordinates={props.data.coordinates} />
    </div>
  );
}
