import React from 'react'
import { DEFAULT_MOVIE_POSTER, IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({poasterPath}) => {
  return (
    <div className='w-40 pr-4'>
        <img className='rounded-lg' alt="Movie Card" src={ poasterPath === null ? DEFAULT_MOVIE_POSTER : IMG_CDN_URL + poasterPath } />
    </div>
  )
}

export default MovieCard