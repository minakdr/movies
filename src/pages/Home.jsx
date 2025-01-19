import MovieCard from "../components/MovieCards";
import { useState } from "react";
import "./Home.css";

function Home() {
  const movies = [
    { id: 1, title: "jhon wick", release: "12/12/2020" }, //I named each element film
    { id: 2, title: "Terminator ", release: "12/12/2022" },
    { id: 3, title: "Dead end ", release: "12/12/2023" },
    { id: 4, title: "PolterGaste", release: "12/12/2024" },
  ];

  const [searchQuery, SetsearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault(); // because the onSubmit auto refreshes the page adn we do not want that
    alert(searchQuery);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => SetsearchQuery(e.target.value)} //updates the searchQuery state whenever the user types something into the input field.
        />
        <button type="submit" className="search-button">
          {" "}
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map((film) => (
          //film.title.toLowerCase().includes(searchQuery) &&  rhis is used when se use an array but we will use an API
          <MovieCard movie={film} key={film.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
