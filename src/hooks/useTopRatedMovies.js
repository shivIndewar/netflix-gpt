import { useDispatch } from "react-redux";
import { OPTIONS,TOPRATED_MOVIES } from "../utils/constant";
import { addTopRatedMovies } from "../utils/user store/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies =()=>{
    const dispatch = useDispatch();
    const getTopRatedMoviesList = async ()=>{
    const movies = await fetch(TOPRATED_MOVIES, OPTIONS);
    const json = await movies.json();
    dispatch(addTopRatedMovies(json.results));  
  }

  useEffect(()=>{
    getTopRatedMoviesList();
  },[]);
}
export default useTopRatedMovies;
