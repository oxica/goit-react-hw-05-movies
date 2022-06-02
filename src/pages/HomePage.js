import { useState, useEffect } from 'react';
import { fetchTrendMovies } from '../services/movies-api';
import { Link, useLocation } from 'react-router-dom';

export default function HomePage() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendMovies().then(request => setMovies(request.results));
  }, []);
  return (
    <>
      <h1>Tranding today</h1>

      {movies &&
        movies.map(movie => (
          <ul>
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.title}
              </Link>
            </li>
          </ul>
        ))}
    </>
  );
}
