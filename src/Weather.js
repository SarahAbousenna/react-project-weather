import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import { UilSearch, UilLocationArrow } from "@iconscout/react-unicons";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [searchedCity, setSearchedCity] = useState(props.defaultCity);
  const [units] = useState("metric");

  const formatBackground = () => {
    if (!weatherData) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weatherData.temperature <= threshold)
      return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };

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
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
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

  function searchLocation(position) {
    let apiKey = "bc5ca568ee2d7c71357ca430a3ff8705";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div
          className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 rounded-md ${formatBackground()}`}
        >
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
                onClick={handleSubmit}
              />
              <UilLocationArrow
                size={30}
                className="text-white cursor-pointer transition ease-out hover:scale-125"
                onClick={getCurrentPosition}
              />
              <div className="flex flex-row w-1/4 items-center justify-center">
                <button
                  name="metric"
                  className="text-xl text-white font-light transition ease-out hover:scale-125"
                  // onClick={handleUnitsChange}
                >
                  °C
                </button>
                <p className="text-xl text-white mx-2 mt-2">|</p>
                <button
                  name="imperial"
                  className="text-xl text-white font-light transition ease-out hover:scale-125"
                  // onClick={handleUnitsChange}
                >
                  °F
                </button>
              </div>
            </div>
          </div>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading....";
  }
}
