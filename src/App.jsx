import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import { lazy, Suspense } from 'react';
import Container from './components/Container/Container';
import Loader from 'components/Loader/Loader';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName:"HomePage" */)
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName:"MoviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName:"MovieDetailsPage" */
  )
);
const NotFoundView = lazy(() =>
  import('./pages/NotFoundView' /* webpackChunkName:"NotFoundView" */)
);

export default function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView path="*" />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
