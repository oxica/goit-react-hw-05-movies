import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../services/movies-api';
import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const { results } = await fetchTrendingMovies();

      setMovies(results);
    };

    getMovies();
  }, []);

  return (
    <>
      <h1>Tranding today</h1>

      {movies &&
        movies.map(
          ({
            id,
            title,
            // poster_path
          }) => (
            <ul>
              <li key={id}>
                <Link
                  to={{
                    pathname: `/movies/${`${id}`}`,
                    state: {
                      from: {
                        location,
                        label: 'Back to Home',
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
                  <p>{title}</p>
                </Link>
              </li>
            </ul>
          )
        )}
    </>
  );
};

export default HomePage;
