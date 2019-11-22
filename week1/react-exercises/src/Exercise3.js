import React, { useState } from "react";

export function Count(props) {
  return <h1>Count: {props.count}</h1>;
}

export function Button(props) {
  return (
    <button
      onClick={() => {
        props.setCount(props.count + 1);
      }}
    >
      Add 1!
    </button>
  );
}

function Counter(props) {
  let [count, setCount] = useState(0);
  let feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";
  return (
    <div>
      <Count count={count} />
      <h2>{feedback}</h2>
      <Button setCount={setCount} count={count} />
    </div>
  );
}

export default Counter;
