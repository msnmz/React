import React from "react";
import "./App.css";
import { HobbyList } from "./Exercise1";
import GuaranteeList from "./Exercise2";
import Counter from "./Exercise3";
const guaranties = require("./guaranties.json");

function App() {
  return (
    <div className="App">
      <HobbyList />
      <GuaranteeList guaranties={guaranties} />
      <Counter />
    </div>
  );
}

export default App;
