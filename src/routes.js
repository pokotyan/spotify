import React from 'react';
import { Router, Route } from 'react-router';
import HomeAbout from './container/HomeAbout';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = (props) => {
  return (
    <Router {...props}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/homeabout" component={HomeAbout} />
      <Route path="*" component={NotFound} />
    </Router>
  )
};

export default Routes;