import React from "react";
import { useNavigate } from "react-router-dom";

const Image = ({ image }) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(`/${image.id}`)} className="mx-auto">
      <figure>
        <img
          className="p-[4px] glass bg-black hover:bg-gray-600"
          src={image.previewURL}
          alt="Shoes"
        />
      </figure>
    </button>
  );
};

export default Image;
