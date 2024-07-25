export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR =
  "https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg";

export const BROWSE_PAGE_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+process.env.REACT_AAP_TMDB_KEY,
  },
};

export const VIDEOS_URL =
  "https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const POPULAR_MOVIES =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const TOPRATED_MOVIES =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const UPCOMMING_MOVIES =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg";

export const SUPPORTED_LANGUAGES = [{identifier:"en", name:"English"},{identifier:"hindi", name:"Hindi"},{identifier:"spanish", name:"Spaninsh"}];
export const SEARCH_MOVIES = "https://api.themoviedb.org/3/search/movie?query=Andaz&include_adult=false&language=en-US&page=1";

export const DEFAULT_MOVIE_POSTER = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTShkml07IJkqm-kVI9W2XwnbaIUbVbKQVIPw&s";