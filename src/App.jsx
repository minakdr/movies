import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Favorite from "./pages/Favorites";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
