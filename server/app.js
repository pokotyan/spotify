const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();

// CORSを許可する
// https://qiita.com/tomoya_ozawa/items/feca4ffc6217d585b037
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Middleware
app.use(bodyparser.urlencoded({ extended: true }));
require('./controllers')(app);

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
