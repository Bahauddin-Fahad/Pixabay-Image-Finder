import React from "react";
import { GoSearch } from "react-icons/go";

const Searchbar = ({ getQuery }) => {
  return (
    <form onSubmit={getQuery} className="form-control">
      <div className="input-group">
        <input
          type="text"
          placeholder="Search Here"
          className="input input-bordered"
          name="query"
        />
        <button type="submit" className="btn btn-square">
          <GoSearch className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
};

export default Searchbar;
