import React from "react";
import data from "./data2";
import Accordion from "./Accordion";
import "./App.css";

const App = () => (
  <div className="app">
    <header className="container">
      <h1>Happy Garden</h1>
      <h2>Monthly Schedule</h2>
      {data.map((item, i) => (
        <Accordion item={item} key={item.id} />
      ))}
    </header>
  </div>
);

export default App;
