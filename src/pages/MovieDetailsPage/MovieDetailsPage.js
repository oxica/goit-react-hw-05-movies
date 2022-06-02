import { useState, useEffect } from 'react';
import {
  useParams,
  NavLink,
  useRouteMatch,
  Switch,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { fetchMovieById, IMAGE_URL } from '../../services/movies-api';
import s from './MovieDetailsPage.module.css';
import MovieReview from '../MovieReview';
import MovieCastView from '../MovieCastView';

export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();

  useEffect(() => {
    fetchMovieById(movieId).then(movie => setMovie(movie));
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      {movie && (
        <>
          <button type="button" onClick={onGoBack}>
            Go back
          </button>
          <div className={s.movieContainer}>
            <div className={s.movieImg}>
              <img
                src={IMAGE_URL + movie.poster_path}
                alt={movie.title}
                widht=""
                height=""
              />
            </div>

            <div>
              <h2>{movie.title}</h2>
              <p>User Score: {`${movie.vote_average}`}</p>
              <h3>Overview</h3>
              <p>{`${movie.overview}`}</p>
              <h3>Genres</h3>
              <p>{`${movie.genres.map(genre => genre.name).join(' / ')}`}</p>
            </div>
          </div>
        </>
      )}
      <hr />
      <p>Additional information</p>
      <nav>
        <NavLink
          to={`${url}/cast`}
          className={s.link}
          activeClassName={s.active}
        >
          Cast
        </NavLink>
        <NavLink
          to={`${url}/reviews`}
          className={s.link}
          activeClassName={s.active}
        >
          Reviews
        </NavLink>
      </nav>

      <Switch>
        <Route path={`${path}/cast`}>
          <MovieCastView movieId={movieId} />
        </Route>

        <Route path={`${path}/reviews`}>
          <MovieReview movieId={movieId} />
        </Route>
      </Switch>
    </>
  );
}
