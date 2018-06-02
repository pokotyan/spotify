import React from 'react';
import { renderToString, ReactDOMServer } from 'react-dom/server';
// import Helmet from 'react-helmet';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
// import { StaticRouter } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory';
import createStore from './store';
import Routes from './routes';
// import createInitialState from 'utils/createInitialState';
// import Html from 'utils/Html';

const body = () => {
  const history = createBrowserHistory();
  const store = createStore(history);

  return (
    <AppContainer>
      <Provider store={store}>
        <Routes history={history} />
      </Provider>
    </AppContainer>
  );
};

const Html = props => (
  <html lang="ja">
    <head>
      <meta charSet="UTF-8" />
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" />
      <script defer src="/bundle.js" />
      {/* <style>{props.style}</style> */}
    </head>
    <body>
      <div id="app">
        {props.children}
      </div>
    </body>
  </html>
);

function handleRoute(req, res) {
  const stream = ReactDOMServer.renderToStaticNodeStream(<Html>{body}</Html>);

  stream.pipe(res);
}

export default (req, res) => {
  handleRoute(req, res);
};
