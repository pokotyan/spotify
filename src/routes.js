import React from 'react';
import { BrowserHistory as Router, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import About from './container/About';
import Top from './container/Top';
import Pokemon from './container/Pokemon';
import CallBack from './container/SpotifyCallBack';
import Home from './container/Home';
import NotFound from './components/NotFound';

// ConnectedRouterはProviderからのstoreを自動で利用する
// 参考：https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux
const Routes = (props) => {
  return (
    <ConnectedRouter {...props}>
      <React.Fragment>
        <Route exact path="/" component={Top} />
        <Route path="/callback" component={CallBack} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/pokemon" component={Pokemon} />
        {/* <Route path="*" component={NotFound} /> */}
      </React.Fragment>
    </ConnectedRouter>
  );
};

export default Routes;
