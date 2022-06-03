import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const KEY = '1c946dce2b60cb636de6f72a25cb04da';
const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

// export function fetchTrendMovies() {
//   return fetchWithErrorHandling(`${BASE_URL}/trending/all/day?api_key=${KEY}`);
// }

// export function fetchMovieById(id) {
//   return fetchWithErrorHandling(
//     `${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US`
//   );
// }

export function fetchMovieCast(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
}

export function fetchMovieReviews(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US`
  );
}

// export function fetchMovieSearch(name) {
//   return fetchWithErrorHandling(
//     `${BASE_URL}/search/movie?api_key=${KEY}&query=${name}&language=en-US&page=1&include_adult=false`
//   );
// }

export const searchMovies = async stringToSearch => {
  const queryString = `search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${stringToSearch}`;

  const { data: movies } = await axios.get(queryString);

  return movies;
};

export const getMovieDetails = async movieId => {
  const queryString = `movie/${movieId}$?api_key=${KEY}&language=en-US`;

  const { data: movie } = await axios.get(queryString);

  return movie;
};

export const fetchTrendingMovies = async () => {
  const queryString = `trending/movie/day?api_key=${KEY}`;

  const { data: movies } = await axios.get(queryString);

  return movies;
};
