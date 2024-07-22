import React from "react";
import MovieCard from "./MovieCard";

const MovieListCart = ({ title, movies }) => {
  console.log(title, movies);
  return (
    <div className="px-6">
      <h1 className="text-2xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poasterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListCart;
