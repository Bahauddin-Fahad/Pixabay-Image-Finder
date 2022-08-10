import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const ClickedImage = () => {
  const { imageId } = useParams();
  const [images, setImages] = useState([]);
  const apiKey = "28977199-208f10526ff5ba2af551c21db";
  const apiURL = `https://pixabay.com/api/?key=${apiKey}&id=${imageId}`;
  useEffect(() => {
    axios.get(apiURL).then((data) => setImages(data.data.hits));
  }, [apiURL]);
  console.log(images);
  return (
    <div className="min-h-screen flex items-center">
      {images.map((imageData) => (
        <div className="card w-full max-w-xl glass bg-gray-800 hover:bg-gray-700 shadow-xl mx-auto my-auto">
          <figure>
            <img src={imageData.largeImageURL} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title mx-auto text-white">{imageData.tags}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClickedImage;
