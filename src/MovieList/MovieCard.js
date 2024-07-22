import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({poasterPath}) => {
  return (
    <div className='w-40 pr-4'>
        <img className='rounded-lg' alt="Movie Card" src={IMG_CDN_URL + poasterPath} />
    </div>
  )
}

export default MovieCard