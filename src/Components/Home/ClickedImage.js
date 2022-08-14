import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const ClickedImage = () => {
  const { imageId } = useParams();
  const [image, setImage] = useState([]);
  const apiKey = "28977199-208f10526ff5ba2af551c21db";
  const apiURL = `https://pixabay.com/api/?key=${apiKey}&id=${imageId}`;
  useEffect(() => {
    axios.get(apiURL).then((data) => setImage(data.data.hits));
  }, [apiURL]);
  console.log(image);
  return (
    <div className="my-5 min-h-screen flex items-center">
      {image.map((imageData) => (
        <div
          className={`card w-full ${
            imageData.previewWidth >= 110 ? "max-w-xl" : "max-w-xs"
          } glass bg-gray-800 hover:bg-gray-700 shadow-xl mx-auto my-auto`}
        >
          <figure>
            <img src={imageData.largeImageURL} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title mx-auto text-white">
              Tags : {imageData.tags}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClickedImage;
