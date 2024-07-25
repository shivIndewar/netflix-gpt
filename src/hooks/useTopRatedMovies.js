import { useDispatch, useSelector } from "react-redux";
import { OPTIONS,TOPRATED_MOVIES } from "../utils/constant";
import { addTopRatedMovies } from "../utils/user store/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies =()=>{
    const dispatch = useDispatch();
    const isTopRatedMovies = useSelector((store)=>store.movies.topRatedMovies);
    const getTopRatedMoviesList = async ()=>{
    const movies = await fetch(TOPRATED_MOVIES, OPTIONS);
    const json = await movies.json();
    dispatch(addTopRatedMovies(json.results));  
  }

  useEffect(()=>{
    if(!isTopRatedMovies) getTopRatedMoviesList();
  },[]);
}
export default useTopRatedMovies;
