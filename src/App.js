import "./App.css";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import ClickedImage from "./Components/Home/ClickedImage";
import SearchedImages from "./Components/Home/SearchedImages";
import Searchbar from "./Components/Home/Searchbar";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const getQuery = (e) => {
    e.preventDefault();
    const query = e.target.query.value.toUpperCase();
    setSearchQuery(query);
    e.target.query.value = "";
  };
  return (
    <div className="App p-10">
      <Searchbar getQuery={getQuery} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/searchedImages"
          element={<SearchedImages searchQuery={searchQuery} />}
        />
        <Route path="/:imageId" element={<ClickedImage />} />
      </Routes>
    </div>
  );
}

export default App;
