import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchedImage from "./SearchedImage";

const SearchedImages = ({ searchQuery }) => {
  const [images, setImages] = useState([]);
  const apiKey = "28977199-208f10526ff5ba2af551c21db";
  const apiURL = `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}`;
  useEffect(() => {
    axios.get(apiURL).then((data) => setImages(data.data.hits));
  }, [apiURL]);

  return (
    <div>
      {searchQuery && (
        <h1 className="text-2xl font-bold text-black mb-5">
          Showing Results for {searchQuery}{" "}
        </h1>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {images.map((image) => (
          <SearchedImage key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default SearchedImages;
