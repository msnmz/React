import React, { useState } from "react";

export function Hobby(props) {
  return <li>{props.title}</li>;
}

export function HobbyList(props) {
  const [hobbies, setHobbies] = useState([
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing"
  ]);
  return (
    <ul>
      {hobbies.map((hobby, idx) => (
        <Hobby title={hobby} key={"hobby_" + idx} />
      ))}
    </ul>
  );
}
