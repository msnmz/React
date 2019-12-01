import React, { useState, useEffect } from "react";
import Joke from "./Joke";

function RandomJoke(props) {
  const [joke, setJoke] = useState({});
  const [apiResult, setApiResult] = useState({});
  useEffect(getRandomJoke, []);

  function getRandomJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(resp => {
        if (resp.ok) return resp.json();
        else
          throw new Error(
            `Could not get a joke, sorry! Because: (${resp.status}) - ${resp.statusText}`
          );
      })
      .then(joke => {
        setJoke(joke);
        setApiResult({ succeed: true, error: null });
      })
      .catch(err => setApiResult({ succeed: false, error: err }));
  }

  return (
    <div>
      <h1> Exercise - 3 </h1>
      <h6> Random Joke </h6>
      {apiResult.error ? (
        <div>
          <hr />
          <h1>{apiResult.error.message}</h1>
        </div>
      ) : (
        <Joke joke={joke} />
      )}
    </div>
  );
}

export default RandomJoke;
