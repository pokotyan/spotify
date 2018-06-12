import React from 'react';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routing';

const Routes = () => renderRoutes(routes);

export default () => (
  <Switch>
    <Routes />
  </Switch>
);

