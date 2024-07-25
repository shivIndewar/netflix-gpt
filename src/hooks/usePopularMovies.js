import { useDispatch, useSelector } from "react-redux";
import { OPTIONS, POPULAR_MOVIES } from "../utils/constant";
import { addPopularMovies } from "../utils/user store/movieSlice";
import { useEffect } from "react";

const usePopularMovies =()=>{
    const dispatch = useDispatch();
    const isPopularMovies = useSelector((store)=>store.movies.popularMovies);
    const getPopularMoviesList = async ()=>{
    const movies = await fetch(POPULAR_MOVIES, OPTIONS);
    const json = await movies.json();
    dispatch(addPopularMovies(json.results));  
  }

  useEffect(()=>{
    if(!isPopularMovies) getPopularMoviesList();
  },[]);
}
export default usePopularMovies;
