import React from "react";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import pixabayLogo from "../../Images/Logos/pixabay.png";
const Searchbar = ({ getQuery }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center lg:justify-between flex-col lg:flex-row mb-5 gap-4">
      <img className="w-full max-w-[250px]" src={pixabayLogo} alt="" />
      <form onSubmit={getQuery} className="form-control">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search Here"
            className="input input-bordered"
            name="query"
          />
          <button
            onClick={() => navigate("/searchedImages")}
            type="submit"
            className="btn btn-square"
          >
            <GoSearch className="w-6 h-6" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
