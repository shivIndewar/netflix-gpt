import { useDispatch, useSelector } from "react-redux";
import { BROWSE_PAGE_URL, OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/user store/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies =()=>{

    const dispatch = useDispatch();
    const isNowPlayingMovies = useSelector((store)=>store.movies.nowPlayingMovies);
    const getNowPlayingMoviesList = async ()=>{
    const movies = await fetch(BROWSE_PAGE_URL, OPTIONS);
    const json = await movies.json();
    dispatch(addNowPlayingMovies(json.results));  
  }

  useEffect(()=>{
    if(!isNowPlayingMovies) getNowPlayingMoviesList();
  },[]);
}
export default useNowPlayingMovies;
