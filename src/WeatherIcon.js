import React from "react";
import clearSkyDay from "./icons/01d.png";
import clearSkyNight from "./icons/01n.png";
import fewCloudsDay from "./icons/02d.png";
import fewCloudsNight from "./icons/02n.png";
import scatteredClouds from "./icons/03d.png";
import brokenClouds from "./icons/04d.png";
import showerRain from "./icons/09d.png";
import rainDay from "./icons/10d.png";
import rainNight from "./icons/10n.png";
import thunderstorm from "./icons/11d.png";
import snow from "./icons/13d.png";
import mist from "./icons/50d.png";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": clearSkyDay,
    "01n": clearSkyNight,
    "02d": fewCloudsDay,
    "02n": fewCloudsNight,
    "03d": scatteredClouds,
    "03n": scatteredClouds,
    "04d": brokenClouds,
    "04n": brokenClouds,
    "09d": showerRain,
    "09n": showerRain,
    "10d": rainDay,
    "10n": rainNight,
    "11d": thunderstorm,
    "11n": thunderstorm,
    "13d": snow,
    "13n": snow,
    "50d": mist,
    "50n": mist,
  };
  return <img src={codeMapping[props.code]} height={220} alt={props.alt} />;
}
