import React from 'react'
import Header from '../Header/Header'
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies'
import MainContainer from '../containers/MainContainer';
import SecondaryContainer from '../containers/SecondaryContainer';
import usePopularMovies from '../../hooks/usePopularMovies';
import useTopRatedMovies from '../../hooks/useTopRatedMovies';
import useUpCommingMovies from '../../hooks/useUpCommingMovies';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpCommingMovies();
  return (
    <div>
      <Header/> 
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse