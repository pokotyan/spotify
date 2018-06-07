import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { renderRoutes } from 'react-router-config'
import routes from './routing'

const Routes = () => renderRoutes(routes)

export default () => {
  return (
    <Switch>
      <Routes />
    </Switch>
  );
};
