import React from "react";
import Image from "./SearchedImage";

const SearchedImages = ({ images }) => {
  console.log(images);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {images.map((image) => (
        <Image key={image.id} image={image} />
      ))}
    </div>
  );
};

export default SearchedImages;
