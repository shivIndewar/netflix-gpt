import React from 'react'
import Header from '../Header/Header'
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies'
import MainContainer from '../containers/MainContainer';
import SecondaryContainer from '../containers/SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header/> 
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse