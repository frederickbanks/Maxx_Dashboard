import React from "react";
import ReactDom from 'react-dom'
import "./App.css";

App = (props) => {
  return (
    <div className="container">
      <Sidebar />
      <Reviews />
      <Rating />
      <Sentiment />
      <Visitors />
    </div>
  );
};

