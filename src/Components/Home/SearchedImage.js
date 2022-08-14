import React from "react";
import { useNavigate } from "react-router-dom";

const SearchedImage = ({ image }) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(`/${image.id}`)} className="mx-auto">
      <figure>
        <img
          className="w-64 p-[4px] glass bg-black hover:bg-gray-600 shadow-lg"
          src={image.largeImageURL}
          alt="Shoes"
        />
      </figure>
    </button>
  );
};

export default SearchedImage;
