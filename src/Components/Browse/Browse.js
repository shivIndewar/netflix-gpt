import React from 'react'
import Header from '../Header/Header'
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies'
import MainContainer from '../containers/MainContainer';
import SecondaryContainer from '../containers/SecondaryContainer';
import usePopularMovies from '../../hooks/usePopularMovies';
import useTopRatedMovies from '../../hooks/useTopRatedMovies';
import useUpCommingMovies from '../../hooks/useUpCommingMovies';
import { useSelector } from 'react-redux';
import GptSearch from '../GPT/GptSearch';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpCommingMovies();

  const showGptSearch = useSelector((store)=> store.gpt.showGPTSearch);

  return (
    <div>
      <Header/> 
      {
        showGptSearch ? <GptSearch /> : <>
          <MainContainer />
          <SecondaryContainer />
        </>
      }
      
    </div>
  )
}

export default Browse