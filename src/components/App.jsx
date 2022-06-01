import { Route, Switch } from 'react-router-dom';

import Navigation from './Navigation/Navigation';

import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import NotFoundView from '../pages/NotFoundView';

export default function App() {
  return (
    <>
      <Navigation />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/movies">
          <MoviesPage />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </>
  );
}
