import { showMovies } from "./showMovies";

export default async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}
