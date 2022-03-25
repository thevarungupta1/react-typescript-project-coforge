import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo";

const Photos = () => {
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setPhotoData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1 className="text-center">All Photos</h1>
      <div className="row">
        {photoData.map((photo) => (
          <Photo data={photo} />
        ))}
      </div>
    </div>
  );
};
export default Photos;
