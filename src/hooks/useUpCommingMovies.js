import { useDispatch } from "react-redux";
import { OPTIONS, UPCOMMING_MOVIES } from "../utils/constant";
import { addUpCommingMovies } from "../utils/user store/movieSlice";
import { useEffect } from "react";

const useUpCommingMovies =()=>{
    const dispatch = useDispatch();
    const getUpcommingMoviesList = async ()=>{
    const movies = await fetch(UPCOMMING_MOVIES, OPTIONS);
    const json = await movies.json();
    dispatch(addUpCommingMovies(json.results));  
  }

  useEffect(()=>{
    getUpcommingMoviesList();
  },[]);
}
export default useUpCommingMovies;
