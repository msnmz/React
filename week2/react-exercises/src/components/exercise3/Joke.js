import React from "react";

function Joke(props) {
  return (
    <div>
      <p>{props.joke.setup}</p>
      <hr />
      <p>{props.joke.punchline}</p>
    </div>
  );
}

export default Joke;
