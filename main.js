import { showMovies } from "./public/src/functions/showMovies";
import getMovies from "./public/src/functions/getMovies";

const apiKey = "391b19b86371301316b362ccf31ffda4";

async function main() {
  const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=1`;

  const movieData = await getMovies(API_URL);
  // const movieId = API_URL.results.id;
  // const movieById = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

  const main = document.getElementById("main");
  const form = document.getElementById("form");
  const search = document.getElementById("search");

  // Get initial movies
  getMovies(API_URL);
  console.log(getMovies(API_URL));
  console.log(movieData);
}

main();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query="`;

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);

    search.value = "";
  } else {
    window.location.reload();
  }
});
