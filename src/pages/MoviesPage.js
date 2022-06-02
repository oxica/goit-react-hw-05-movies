import SearchBar from '../components/Searchbar/Searchbar';

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchMovieSearch } from '../services/movies-api';
import { Link } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');

  console.log();

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchMovieSearch(query).then(request => {
      if (!request.results.length) {
        toast.error('Try again');
        return;
      }
      setMovies(request.results);
    });
  }, [query]);

  const onClick = request => {
    setQuery(request);
  };

  return (
    <>
      <SearchBar onClick={onClick} />
      {movies &&
        movies.map(movie => (
          <ul>
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          </ul>
        ))}
    </>
  );
};

export default MoviesPage;
