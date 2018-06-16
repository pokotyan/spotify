const webpack = require('webpack');
const path = require('path');

module.exports = {
  target: 'web', // <=== can be omitted as default is 'web'
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: [
    'react-hot-loader/patch', // react-hot-loaderを使えるようにする
    'babel-polyfill', // Polyfillも含める
    'webpack-hot-middleware/client?reload=true', // webpack-dev-serverを独自のexpressで動かす際、HMRするなら必要な記述
    './src/index.js',
  ],
  output: { // ファイルの出力設定 https://stackoverflow.com/questions/28846814/what-does-publicpath-in-webpack-do
    // 出力ファイルのディレクトリ名
    path: `${__dirname}/build`,
    // 出力ファイル名
    filename: 'bundle.js',
    publicPath: '/', // build/index.htmlからみたバンドルされたファイルたちのパス。webpack-dev-serverを独自のexpressで動かす際にこの設定がいる
  },
  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        use: [
          {
            // Babel を利用する
            loader: 'babel-loader',
            // Babel のオプションを指定する
            options: {
              presets: [
                // env を指定することで、ES2017 を ES5 に変換。
                // {modules: false}にしないと import 文が Babel によって CommonJS に変換され、
                // webpack の Tree Shaking 機能が使えない
                ['env', { modules: false }],
                // React の JSX を解釈
                'react',
              ],
            },
          },
        ],
        // node_modules は除外する
        exclude: /node_modules/,
      },
      {
        // 備忘録：css modules使いたかったけど、mini-css-extract-pluginのバグ？でうまくいかずhttps://github.com/webpack-contrib/mini-css-extract-plugin/issues
        // 結局styled_componentsを使うことにした。
        // Sassファイルの読み込みとコンパイル
        test: /\.scss$/, // 対象となるファイルの拡張子
        use: [
          // linkタグに出力する機能
          'style-loader',
          // CSSをバンドルするための機能
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.join(__dirname, 'src', 'style', '*.scss'),
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|ttf|eot)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  // requestやrequest-promise使う際に必要な設定 https://github.com/request/request/issues/1529
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  plugins: [
    // webpack-dev-serverを独自のexpressで動かす際にHMRするなら、このプラグイン必要
    new webpack.HotModuleReplacementPlugin(),
  ],
  // ソースマップを有効にする
  devtool: 'source-map',
  // ローカル開発用環境を立ち上げる。open: trueで自動的にブラウザが立ち上がる
  // ブラウザで http://localhost:8081/ でアクセスできるようになる
  devServer: {
    contentBase: 'build',
    // open: true, // expressにwebpack dev server組み込んで使った場合、この指定が効いていないぽい
    proxy: {
      '/api/*': {
        target: 'http://localhost:9000',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
