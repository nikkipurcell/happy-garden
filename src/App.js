import React from "react";
import data from "./data";
import Accordion from "./Accordion";
import "./App.css";

export default () => (
  <div className="app">
    <header className="container">
      <h1>Fonthill National Park</h1>
      <h2>Lawn and Garden</h2>
      {data.map((item, i) => (
        <Accordion item={item} key={item.id} />
      ))}
    </header>
  </div>
);
