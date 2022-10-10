import React, { useState } from "react";

export default function TemperatureConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFah(event) {
    event.preventDefault();
    setUnit("fahrenhite");
  }

  function convertToCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="TemperatureConversion">
        <span>{Math.round(props.celsius)}° </span>
        <span className="celcius">
          C | {""}
          <a href="/" onClick={convertToFah}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenhite = (props.celsius * 9) / 5 + 32;
    return (
      <div className="TemperatureConversion">
        <span>{Math.round(fahrenhite)}° </span>
        <span className="fah">
          <a href="/" onClick={convertToCel}>
            C {""}
          </a>
          | F
        </span>
      </div>
    );
  }
}
