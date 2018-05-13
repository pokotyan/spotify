import React from 'react';
import { Router, Route } from 'react-router';
import About from './container/About';
import Top from './container/Top';
import Pokemon from './container/Pokemon';
import CallBack from './container/SpotifyCallBack';
import NotFound from './components/NotFound';

const Routes = (props) => {
  return (
    <Router {...props}>
      <Route path="/" component={Top} />
      <Route path="/callback" component={CallBack} />
      <Route path="/about" component={About} />
      <Route path="/pokemon" component={Pokemon} />
      <Route path="*" component={NotFound} />
    </Router>
  );
};

export default Routes;
