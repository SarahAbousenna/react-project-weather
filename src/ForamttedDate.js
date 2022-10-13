import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthDay = props.date.getDate();
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let month = months[props.date.getMonth()];
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      <span className="localtime">Your local time:</span> {monthDay} {month},{" "}
      {day} {hours}:{minutes}
    </div>
  );
}
