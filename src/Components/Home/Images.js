import React from "react";
import Image from "./Image";

const Images = ({ images }) => {
  // console.log(images);

  return (
    <div className="flex flex-wrap gap-5">
      {images.map((image) => (
        <Image key={image.id} image={image} />
      ))}
    </div>
  );
};

export default Images;
