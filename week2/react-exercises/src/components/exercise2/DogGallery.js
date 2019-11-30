import React, { useState } from "react";
import DogPhoto from "./DogPhoto";
import Button from "./Button";

function DogGallery(props) {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [apiResult, setApiResult] = useState({});
  function getDogPhoto() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(resp => {
        if (resp.ok) return resp.json();
        else
          throw new Error(
            `Could not get dog photos, sorry! Because: (${resp.status}) - ${resp.statusText}`
          );
      })
      .then(({ message: photoURL }) => {
        setDogPhotos([...dogPhotos, photoURL]);
        setApiResult({ succeed: true, error: null });
      })
      .catch(err => setApiResult({ succeed: false, error: err }));
  }
  return (
    <div>
      <Button onClick={getDogPhoto} />
      {dogPhotos.length ? (
        <ul>
          {dogPhotos.map(photo => (
            <li key={"dog_photo_" + photo}>
              <DogPhoto photo={photo} />
            </li>
          ))}
        </ul>
      ) : (
        <h1>Get your first dog by clicking the button!</h1>
      )}
      {apiResult.error && <h1>{apiResult.error.message}</h1>}
    </div>
  );
}

export default DogGallery;
