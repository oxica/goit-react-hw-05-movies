import s from '../components/Searchbar/Searchbar.module.css';

import { useState, useEffect } from 'react';
import { searchMovies } from '../services/movies-api';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Notiflix from 'notiflix';
import { makeSlug } from '../services/slug';

const MoviesPage = () => {
  const [movieToFind, setMovieToFind] = useState('');
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const searchString = new URLSearchParams(location.search).get('query');

    if (searchString) {
      const getMovies = async () => {
        const { results } = await searchMovies(searchString);

        setMovies(results);
        setMovieToFind('');
      };

      getMovies();
    }
  }, [location.search]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (movieToFind.trim()) {
      const { results } = await searchMovies(movieToFind);

      setMovies(results);
      setMovieToFind('');

      if (results.length === 0) {
        Notiflix.Notify.warning(
          'No movies found! Please change your request and try again'
        );
      }

      history.push({
        ...location,
        search: `query=${movieToFind}`,
      });
    }
  };

  return (
    <>
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={handleSubmit}>
          <input
            onChange={e => setMovieToFind(e.target.value)}
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
      {movies.length > 0 &&
        movies.map(({ id, title, poster_path }) => (
          <ul>
            <li key={id}>
              <Link
                to={{
                  pathname: `/movies/${makeSlug(`${title} ${id}`)}`,
                  state: {
                    from: {
                      location,
                      label: 'Back to Movies',
                    },
                  },
                }}
              >
                {/* <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w300${poster_path}`
                      : 'https://pomogaetsrazu.ru/images/offers/2829219234.jpg'
                  }
                  alt={title}
                /> */}
                <p className={s.moviesList__movieTitle}>{title}</p>
              </Link>
            </li>
          </ul>
        ))}
    </>
  );
};

export default MoviesPage;
