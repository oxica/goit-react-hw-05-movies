const KEY = '1c946dce2b60cb636de6f72a25cb04da';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrendMovies() {
  return fetchWithErrorHandling(`${BASE_URL}/trending/all/day?api_key=${KEY}`);
}

export function fetchMovieById(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US`
  );
}
