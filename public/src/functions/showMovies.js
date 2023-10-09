import { getClassByRate } from "./getClassByRate";

export function showMovies(movies) {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  main.innerHTML = "";

  movies.forEach(async (movie) => {
    const { title, poster_path, vote_average, overview, id, release_date } =
      movie;

    const apiKey = "391b19b86371301316b362ccf31ffda4";
    const movieById = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    );

    const movieDetails = await movieById.json();

    console.log(movieDetails);

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
          <a href="${movieDetails.homepage}" target="_blank"><img src="${
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
  });
}
