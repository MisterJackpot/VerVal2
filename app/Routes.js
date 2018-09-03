/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './screens/HomePage/HomePage';
import MainPage from './screens/MainPage/MainPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.COUNTER} component={MainPage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
