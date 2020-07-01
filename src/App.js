import React, { Component } from "react";
import Input from "./input";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="container">
        <header>React Movie Search</header>
        <Input />
      </div>
    );
  }
}

export default App;
