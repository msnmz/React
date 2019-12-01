import React from "react";
import Friend from "./components/exercise1/Friend";
import "./App.css";
import DogGallery from "./components/exercise2/DogGallery";
import RandomJoke from "./components/exercise3/RandomJoke";

function App() {
  return (
    <div className="App">
      <Friend />
      <br />
      <hr />
      <DogGallery />
      <hr />
      <RandomJoke />
    </div>
  );
}

export default App;
