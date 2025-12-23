import React, { useEffect, useState } from "react";
import "./MovieCard.css";
import axios from "axios";

const MovieCard = () => {
  const [movieapi, setmovieapi] = useState([]);

  const handlefetch = async () => {
    const moviedata = await axios.get("https://fooapi.com/api/movies");
    setmovieapi(moviedata.data.data); // adjust if needed
  };

  useEffect(() => {
    handlefetch();
  }, []);

  return (
    <div className="movies-grid">
      {movieapi.slice(0,5).map((movie) => (
        <div className="movie-info" key={movie.id}>
          <h1>{movie.title}</h1>
          <p className="movie-meta">{movie.type}</p>
          <p className="movie-meta">{movie.runtime}</p>
          <div className="movie-bottom">
            <span className="movie-year">{movie.year}</span>
            <span className="movie-rating">{movie.rating}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
