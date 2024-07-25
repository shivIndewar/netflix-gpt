import { useDispatch, useSelector } from "react-redux";
import { OPTIONS, UPCOMMING_MOVIES } from "../utils/constant";
import { addUpCommingMovies } from "../utils/user store/movieSlice";
import { useEffect } from "react";

const useUpCommingMovies =()=>{
    const dispatch = useDispatch();
    const isUpCommingMovies = useSelector((store)=>store.movies.upCommingMovies);
    const getUpcommingMoviesList = async ()=>{
    const movies = await fetch(UPCOMMING_MOVIES, OPTIONS);
    const json = await movies.json();
    dispatch(addUpCommingMovies(json.results));  
  }

  useEffect(()=>{
    if(!isUpCommingMovies) getUpcommingMoviesList();
  },[]);
}
export default useUpCommingMovies;
