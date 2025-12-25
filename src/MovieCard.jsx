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
  {movieapi.map((movie) => (
    <div className="movie-card" key={movie.id}>
      <img
        src={movie.poster}
        alt={movie.title}
        className="movie-poster"
      />

      <div className="movie-info">
        <h2 className="movie-title">{movie.title}</h2>
        
        <p className="dir">Directed by- {movie.director}</p>

        <p className="movie-meta">{movie.genre}</p>
        <p className="movie-meta">{movie.runtime}</p>
        <h3>Summary</h3>
        <p className="movie-description">{movie.plot}</p>

        <div className="movie-bottom">
          <span className="movie-year">Year:{movie.year}</span>
          <span className="movie-rating">{movie.rating}</span>
          
          <h3 className="star"> ★★★★★</h3>
        </div>
      </div>
    </div>
  ))}
</div>

  );
};

export default MovieCard;
