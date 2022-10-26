import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 rounded bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <Weather defaultCity="New York" />

        <footer className="text-white">
          This project is created by{" "}
          <a
            href="https://www.sarahabousenna.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            Sarah Abousenna
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/SarahAbousenna/react-project-weather"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            open sourced{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
