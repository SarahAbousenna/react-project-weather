import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />

      <footer className="text-grey">
        This project is created by{" "}
        <a
          href="https://www.sarahabousenna.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300"
        >
          Sarah Abousenna
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/SarahAbousenna/react-project-weather"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300"
        >
          open sourced{" "}
        </a>
      </footer>
    </div>
  );
}
