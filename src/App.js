import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main.jsx";
import AppLanding from "./components/applanding.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;