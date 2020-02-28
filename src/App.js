import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Grommet } from "grommet";
import theme from "./theme";
function App() {
  return (
    <Grommet theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Grommet>
  );
}

export default App;
