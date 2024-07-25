import { useDispatch, useSelector } from "react-redux";
import { OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/user store/movieSlice";
import { useEffect } from "react";

const useMovieTrailer =(movieID)=>{

    const dispatch = useDispatch();
    const isTrailerVideo = useSelector((store)=> store.movies.trailerVideo); 
    const getMovieVideos = async () => {
      const videos = await fetch(
        "https://api.themoviedb.org/3/movie/"+movieID+"/videos?language=en-US",
        OPTIONS
      );
      const json = await videos.json();
      const filteredTrailers = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filteredTrailers.length
        ? filteredTrailers[0]
        : json.results[0];
        dispatch(addTrailerVideo(trailer));
    };
  
    useEffect(() => {
      if(!isTrailerVideo) getMovieVideos();
    }, []);
  
}

export default useMovieTrailer;