const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const proxyMiddleware = require('http-proxy-middleware');

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

// ssrをミドルウェアに登録
app.get('*', (req, res) => {
  require('./src/server')(req, res);
})

console.log(`Served: http://localhost:${port}`);
app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});