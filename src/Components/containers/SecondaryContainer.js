import React from "react";
import MovieListCart from "../../MovieList/MovieListCart";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="relative z-20 pl-12">
          <MovieListCart title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieListCart title={"Popular"} movies={movies.popularMovies} />
           <MovieListCart title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieListCart title={"Upcomming"} movies={movies.upCommingMovies} />
          {/*<MovieListCart title={"Horror"} movies={movies.nowPlayingMovies} /> */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
