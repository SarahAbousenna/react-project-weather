import React from "react";
import "./Weather.css";
export default function Weather() {
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
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="icon"
          />
        </div>
        <h1 className="col-6 city">NEW YORK</h1>
      </div>
      <div className="row">
        <div className="col-6">
          <span className="temp">19°</span>
          <span className="celcius">C </span>
          <span className="dash">| </span>
          <span className="fah">F</span>
        </div>

        <div className="col-6 date"> Friday 6 June</div>
      </div>
      <div className="row">
        <div className="col-6">
          <ul>
            <li className="humidity">Humidity: 15%</li>
            <li className="wind">Wind: 10 KM/HR</li>
            <li className="precipitation">Precipitation: 5%</li>
          </ul>
        </div>
        <div className="col-6 description"> Mostly cloudy</div>
      </div>
    </div>
  );
}
