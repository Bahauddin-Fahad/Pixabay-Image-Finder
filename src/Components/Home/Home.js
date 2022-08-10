import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Images from "./Images";
import Searchbar from "./Searchbar";
import pixabayLogo from "../../Images/Logos/pixabay.png";

const Home = () => {
  const apiKey = "28977199-208f10526ff5ba2af551c21db";
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);

  const apiURL = `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}`;
  useEffect(() => {
    axios.get(apiURL).then((data) => setImages(data.data.hits));
  }, [apiURL]);

  const getQuery = (e) => {
    e.preventDefault();
    const query = e.target.query.value.toUpperCase();
    setSearchQuery(query);
    console.log(query);
  };
  return (
    <div className="m-10">
      <div className="flex justify-between flex-col lg:flex-row mb-10 gap-4">
        <img className="w-full max-w-[250px]" src={pixabayLogo} alt="" />
        <Searchbar getQuery={getQuery} />
      </div>
      {searchQuery ? (
        <>
          <h1 className="text-2xl font-bold text-black mb-5">
            Showing Results for {searchQuery}
          </h1>
          <Images images={images} />
        </>
      ) : (
        <>
          <div className="min-h-screen mt-[-168px] flex items-center justify-center">
            <h1 className="text-6xl font-bold mb-5 text-black">
              Welcome To Pixabay
            </h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
