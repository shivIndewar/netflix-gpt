import React from 'react'
import { useSelector } from 'react-redux'
import MovieListCart from '../../MovieList/MovieListCart';

const GPTMovieSuggestion = () => {
  const gptMovies = useSelector((store)=>store.gpt);
  const {movieNames, movieResults} = gptMovies;
  if(movieNames === null) return;
  console.log(movieResults);

  return (
    <div className='bg-black'>
      {
        movieNames.map((names, index) =>(
          <MovieListCart title={names} movies={gptMovies[index]} />
        ))}
    </div>
  )
}

export default GPTMovieSuggestion