import React from 'react';
import { Router, Route } from 'react-router';
import About from './container/About';
import Home from './container/Home';
import Pokemon from './container/Pokemon';
import NotFound from './components/NotFound';

const Routes = (props) => {
  return (
    <Router {...props}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/pokemon" component={Pokemon} />
      <Route path="*" component={NotFound} />
    </Router>
  );
};

export default Routes;
