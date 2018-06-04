import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import proxyMiddleware from 'http-proxy-middleware';
import React from 'react';
import { renderToStaticNodeStream } from 'react-dom/server';
// import Helmet from 'react-helmet';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import createMemoryHistory from 'history/createMemoryHistory';
import createStore from './src/store';
import Routes from './src/routes';
// import createInitialState from './src/utils/createInitialState';

const app = express();
const port = process.env.PORT || 8081;
 
if (process.env.NODE_ENV !== 'production') {
  const config = require('./webpack.config');
  const compiler = webpack(config);
  const devConfig = config.devServer;

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));

  // Set up the proxy.
  if(devConfig.proxy) {
    Object.keys(devConfig.proxy).forEach((context) => {
      app.use(proxyMiddleware(context, devConfig.proxy[context]));
    });
  }
}

// Serve static files
app.use(express.static(path.resolve(__dirname, 'build')));

// SSRをするミドルウェアを登録
app.get('*', (req, res) => {
  // https://github.com/ReactTraining/react-router/issues/4977
  // ブラウザ履歴はサーバー側には存在しないのでcreateMemoryHistoryを使う
  const history = createMemoryHistory();
  const store = createStore(history);

  res.write('<!DOCTYPE html>');

  const stream = renderToStaticNodeStream(
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" />
        <script defer src="bundle.js" />
        {/* <style>{props.style}</style> */}
      </head>
      <body>
        <div id="app">
          <AppContainer>
            <Provider store={store}>
              <Routes history={history} />
            </Provider>
          </AppContainer>
        </div>
      </body>
    </html>);

  stream.pipe(res);
});

console.log(`Served: http://localhost:${port}`);
app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});