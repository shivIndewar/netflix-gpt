import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OPTIONS } from "../../utils/constant";
import { addGPTMovies } from "../../utils/user store/gptSlice";
const GPTSearchBar = () => {
  const languageKey = useSelector((store) => store.lang.selectedLanguage);
  const serchText = useRef("Test");
  const dispatch = useDispatch();
  const handleGPTSearchKey = async () => {
    // open api call to fetch the suggessions it's not working as restricted to add credit card to start the billing
    // const query =
    //   "Act as a movie recomendatnio system and suggest some movies for the query :" +
    //   serchText.current.value +
    //   ". only give me names of 5 movies, comma separated like the result given ahead. Example Result : Gadar, Sarkar, Animal, Tum, Hum";
    // const chatCompletion = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: query }],
    //   model: "gpt-3.5-turbo",
    // });

    // console.log(chatCompletion.choices);
    if(serchText.current.value === null) return;

    const moviesCollection =  serchText.current.value.split(",");
    const moviesResult = moviesCollection.map((movie) => searchMovies(movie));
    const result = await Promise.all(moviesResult);
    dispatch(addGPTMovies({movieNames :moviesCollection, movieResults : result}));
    console.log(result);
  };

  const searchMovies = async (movie)=>{
    const searcgedMovies = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", OPTIONS);
    const json = await searcgedMovies.json();
    return json.results;
  }



  return (
    <div className="pt-[8%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={serchText}
          className="p-4 m-4 col-span-10"
          type="text"
          placeholder={languageKey.gptPlaceHolder}
        />
        <button
          onClick={handleGPTSearchKey}
          className="m-4 bg-red-600 px-2 py-2 rounded-lg col-span-2"
        >
          {languageKey.search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
