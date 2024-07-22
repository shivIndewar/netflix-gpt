import { useDispatch } from "react-redux";
import { OPTIONS, POPULAR_MOVIES } from "../utils/constant";
import { addPopularMovies } from "../utils/user store/movieSlice";
import { useEffect } from "react";

const usePopularMovies =()=>{
    console.log("usePopularMovies called");
    const dispatch = useDispatch();
    const getPopularMoviesList = async ()=>{
    const movies = await fetch(POPULAR_MOVIES, OPTIONS);
    const json = await movies.json();
    dispatch(addPopularMovies(json.results));  
  }

  useEffect(()=>{
    getPopularMoviesList();
  },[]);
}
export default usePopularMovies;
