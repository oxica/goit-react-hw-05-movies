import Loader from 'components/Loader/Loader';
import { useState, useEffect, lazy, Suspense } from 'react';
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

const MovieReview = lazy(() =>
  import('../MovieReview' /* webpackChunkName:"MovieReview" */)
);
const MovieCastView = lazy(() =>
  import('../MovieCastView' /* webpackChunkName:"MovieCastView" */)
);

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
      {!movie ? (
        <div className={s.notFound}>This movie is not found</div>
      ) : (
        <>
          <button type="button" onClick={onGoBack}>
            Go back
          </button>
          <div className={s.movieContainer}>
            <div className={s.movieImg}>
              <img
                src={
                  movie.poster_path
                    ? IMAGE_URL + movie.poster_path
                    : `https://bitsofco.de/content/images/2018/12/broken-1.png`
                }
                alt={movie.title}
                widht=""
                height=""
              />
            </div>

            <div>
              <h2>{movie.title}</h2>
              <p>User Score: {`${movie.vote_average * 10}`}%</p>
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

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={`${path}/cast`}>
            <MovieCastView movieId={movieId} />
          </Route>

          <Route path={`${path}/reviews`}>
            <MovieReview movieId={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
