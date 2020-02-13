import React, { Component } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Visitors from './Components/Visitors'
class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <Visitors />
      </div>
    );
  }
}

export default App;
