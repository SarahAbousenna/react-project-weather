import React from "react";
import "./App.css";
import background from "./images/backgroundday.png";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <img src={background} alt="background" className="background" />

        <Weather defaultCity="New York" />

        <footer>
          This project is created by{" "}
          <a
            href="https://www.sarahabousenna.com/"
            target="_blank"
            rel="noreferrer"
          >
            Sarah Abousenna
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/SarahAbousenna/react-project-weather"
            target="_blank"
            rel="noreferrer"
          >
            open sourced{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
