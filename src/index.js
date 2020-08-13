import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";
import "./styles.css";

var App = () => (
  <div className="App">
    <h1>Name Tag Generator</h1>
    <NameTag name="Dan" />
    <NameTag name="Ian" />
    <NameTag name="Cassie" />
    <NameTag name="Jyle" />
    <NameTag name="Max" />
  </div>
);

var rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
