import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { BG_URL } from "../../utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-20">
        <img
          src={BG_URL}
          alt="background"
        ></img>
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
  );
};

export default GptSearch;
