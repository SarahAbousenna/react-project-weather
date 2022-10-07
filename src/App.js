import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather />
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

export default App;
