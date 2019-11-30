import React from "react";

function FriendProfile(props) {
  return props.apiResult.succeed ? (
    <ul>
      {Object.entries(props.friend).map(([key, value]) => (
        <li key={"friend_prop_" + key}>
          {key} : {value}
        </li>
      ))}
    </ul>
  ) : props.apiResult.error ? (
    <h1>{props.apiResult.error.message}</h1>
  ) : (
    <div></div>
  );
}

export default FriendProfile;
