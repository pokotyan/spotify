const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: [
    'babel-polyfill',
    './server.js',
  ],
  output: {
    path: path.join(process.cwd(), 'build'),
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: path.join(process.cwd(), 'src'),
        exclude: /node_modules/,
        options: {
          presets: [
            ['env', { modules: false }],
            'react',
          ],
        },
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
    ],
  },
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: true,
    __dirname: true,
  },
  externals: [nodeExternals({ // target: 'node'の場合に限りだが、これがないとnode-modules配下もバンドルしようとする。https://saku.io/build-for-node-runtime-using-webpack/
    whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
  })],
};
