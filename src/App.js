import "./App.css";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import ClickedImage from "./Components/Home/ClickedImage";
import SearchedImages from "./Components/Home/SearchedImages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchedImage" element={<SearchedImages />} />
        <Route path="/:imageId" element={<ClickedImage />} />
      </Routes>
    </div>
  );
}

export default App;
