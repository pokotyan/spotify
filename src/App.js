import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { Router } from 'react-router-dom';
import Routes from './routes';
import createStore from './store';

const history = createBrowserHistory();
const store = createStore(history);

const render = () => {
  // ReactDOM.hydrate使ったら、Warning: Expected server HTML to contain a matching <div> in <div>.というのがdevツールに出た。調べたら以下の対処法があった。
  // https://github.com/nozzle/react-static/issues/144
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

  // BrowserRouterにhistoryのpropsを渡したら
  // Warning: <BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`."
  // というエラーが出る。代わりにRouterを使うとエラーは出ない
  // 参考：https://stackoverflow.com/questions/48349138/browserrouter-ignores-the-history-prop
  // というか、そもそもBrowserRouterはhistoryを渡す必要がないぽい。内部にhistoryを持ってる
  // 参考：https://github.com/ReactTraining/react-router/issues/4727
  renderMethod(
    <AppContainer>
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
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
