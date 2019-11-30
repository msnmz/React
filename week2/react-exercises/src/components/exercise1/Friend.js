import React, { useState } from "react";
import Button from "./Button";
import FriendProfile from "./FriendProfile";

function Friend(props) {
  const [friend, setFriend] = useState({});
  const [apiResult, setApiResult] = useState({});
  function getFriend() {
    fetch("https://www.randomuser.me/api?results=1")
      .then(resp => {
        if (resp.ok) return resp.json();
        else
          throw new Error(
            `Could not get a friend, sorry! Because: (${resp.status}) - ${resp.statusText}`
          );
      })
      .then(({ results }) => {
        const randomFriend = results[0];
        setFriend({
          Name: randomFriend.name.first + " " + randomFriend.name.last,
          Address:
            randomFriend.location.street.name +
            " " +
            randomFriend.location.street.number +
            ", " +
            randomFriend.location.city +
            ", " +
            randomFriend.location.postcode,
          Country: randomFriend.location.country,
          Email: randomFriend.email,
          Phone: randomFriend.phone
        });
        setApiResult({ succeed: true, error: null });
      })
      .catch(err => setApiResult({ succeed: false, error: err }));
  }
  return (
    <div>
      <h1>Exercise - 1</h1>
      <Button onClick={getFriend} />
      <FriendProfile friend={friend} apiResult={apiResult} />
    </div>
  );
}

export default Friend;
