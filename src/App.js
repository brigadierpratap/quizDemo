import logo from "./logo.svg";
import "./App.css";
//https://www.computerhope.com/jargon/m/example.mp3
import React, { Component } from "react";
import Quiz from "./Component/Quiz";

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Test</h1>
        <Quiz />
      </div>
    );
  }
}

export default App;
