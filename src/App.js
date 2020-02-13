import React, { Component } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Visitors from "./Components/Visitors";
import Reviews from "./Components/Reviews";
import Sentiment from "./Components/Sentiment";
import Rating from "./Components/Rating";
class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <Visitors />
        <Reviews />
        <Sentiment />
        <Rating />
      </div>
    );
  }
}

export default App;
