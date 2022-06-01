import { Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';

import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import Container from './components/Container/Container';

// import NotFoundView from '../pages/NotFoundView';

export default function App() {
  return (
    <Container>
      <Navigation />

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

        {/* <Route>
          <NotFoundView />
        </Route> */}
      </Switch>
    </Container>
  );
}
