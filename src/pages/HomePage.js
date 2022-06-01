import { useState, useEffect } from 'react';
import { fetchTrendMovies } from '../services/movies-api';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendMovies().then(request => setMovies(request.results));
  }, []);
  return (
    <>
      <h1>Tranding today</h1>

      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title || movie.name}</Link>
          </li>
        ))}
    </>
  );
}
