const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

import { getClassByRate } from "./getClassByRate";
// import { getMovieID } from "./getMovieId";
// import { getIDandHomepage } from "./getMovieId";

export function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview, id, release_date } =
      movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
          <a href="#" target="_blank"><img src="${
            IMG_PATH + poster_path
          }" alt="${title}"></a>
            <div class="movie-info">
          <h4>${title}</h4>
          
          <span class="${getClassByRate(
            vote_average.toFixed(1)
          )}">${vote_average.toFixed(1)}</span>
            </div>
            <h5>Release Date:   ${release_date}</h5>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        
        `;
    main.appendChild(movieEl);
    // console.log(id);
  });
}
