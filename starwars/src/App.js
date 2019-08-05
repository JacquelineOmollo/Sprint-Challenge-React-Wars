import React from "react";
import "./App.css";
import Cards from "../src/components/Cards";
import DataCard from "../src/components/DataCard";

const App = () => {
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      <Cards />
      <DataCard />
    </div>
  );
};

export default App;
