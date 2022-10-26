import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import { UilSearch, UilLocationArrow } from "@iconscout/react-unicons";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [searchedCity, setSearchedCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      feels_like: response.data.main.feels_like,
      sunrise: new Date(response.data.main.sunrise * 1000),
      sunset: new Date(response.data.main.sunset * 1000),
      date: new Date(response.data.dt * 1000),
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
    });
  }

  function search() {
    let apiKey = "bc5ca568ee2d7c71357ca430a3ff8705";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setSearchedCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="flex flex-row justify-center my-6">
          <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search for city..."
                className="text-xl p-2 font-medium w-full shadow-xl focus:outline-none capitalize opacity-60 rounded placeholder:lowercase"
                onChange={handleCityChange}
              />
            </form>
            <UilSearch
              size={30}
              className="text-white cursor-pointer transition ease-out hover:scale-125"
            />
            <UilLocationArrow
              size={30}
              className="text-white cursor-pointer transition ease-out hover:scale-125"
            />
          </div>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading....";
  }
}
