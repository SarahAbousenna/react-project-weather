import React, { useState } from "react";
import "./App.css";
import Weather from "./Weather";
import Switch from "./components/Switch";

export default function App() {
  const [isToggled, setIsToggoled] = useState(false);

  return (
    <div className="App">
      <div className="Container">
        <Switch
          rounded={true}
          isToggled={isToggled}
          onToggle={() => setIsToggoled(!isToggled)}
        />
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
