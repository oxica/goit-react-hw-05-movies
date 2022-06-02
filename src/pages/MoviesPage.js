import s from '../components/Searchbar/Searchbar.module.css';

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchMovieSearch } from '../services/movies-api';
import { Link } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [movieToFind, setMovieToFind] = useState('');

  // const location = useLocation();
  // const history = useHistory();

  useEffect(() => {
    if (!movieToFind) {
      return;
    }

    fetchMovieSearch(movieToFind).then(request => {
      if (!request.results.length) {
        toast.error('Try again');
        return;
      }
      setMovies(request.results);
    });
  }, [movieToFind]);

  const handleInputChange = e => {
    setMovieToFind(e.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (movieToFind.trim() === '') {
      toast.error('Enter your search query');
      return;
    }

    onClick(movieToFind);
  };

  const onClick = request => {
    setMovieToFind(request);
  };

  return (
    <>
      <header className={s.searchbar}>
        <form className={s.searchForm} onClick={handleSubmit}>
          <input
            onInput={handleInputChange}
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            value={movieToFind}
          />
          <button type="submit" className={s.searchFormButton}>
            search
          </button>
        </form>
      </header>
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
