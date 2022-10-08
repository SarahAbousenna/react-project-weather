import React from "react";

export default function ForamttedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.day.getDate()];
  let hours = props.hour.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.day.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day}, {hours}:{minutes}
    </div>
  );
}
