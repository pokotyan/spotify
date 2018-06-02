import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import Routes from './routes';
import createStore from './store';

const history = createBrowserHistory();
const store = createStore(history);

const render = () => {
  // ReactDOM.hydrate使ったら、Warning: Expected server HTML to contain a matching <div> in <div>.というのがdevツールに出た。調べたら以下の対処法があった。
  // https://github.com/nozzle/react-static/issues/144
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

  renderMethod(
    <AppContainer>
      <Provider store={store}>
        <Routes history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
};

render();

if (module.hot) {
  module.hot.accept('./routes', () => {
    render();
  });
}
