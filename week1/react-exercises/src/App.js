import React from "react";
import "./App.css";
import { HobbyList } from "./Exercise1";
import GuaranteeList from "./Exercise2";
const guaranties = require("./guaranties.json");

function App() {
  return (
    <div className="App">
      <HobbyList />
      <GuaranteeList guaranties={guaranties} />
    </div>
  );
}

export default App;
