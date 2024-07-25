import React from 'react'
import { useSelector } from 'react-redux'
import MovieListCart from '../../MovieList/MovieListCart';

const GPTMovieSuggestion = () => {
  const gptMovies = useSelector((store)=>store.gpt);
  const {movieNames, movieResults} = gptMovies;
  if(movieNames === null) return;
  return (
    <div className='bg-black bg-opacity-70'>
      {
        movieNames.map((names, index) =>(
          <MovieListCart title={movieNames[index]} movies={movieResults[index]} />
        ))}
    </div>
  )
}

export default GPTMovieSuggestion