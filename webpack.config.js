module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: [
    'babel-polyfill', // Polyfillも含める
    './src/main.js',
  ],
  // ファイルの出力設定
  output: {
    // 出力ファイルのディレクトリ名
    path: `${__dirname}/build`,
    // 出力ファイル名
    filename: 'bundle.js'
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
                ['env', {'modules': false}],
                // React の JSX を解釈
                'react'                
              ]
            }
          }
        ],
        // node_modules は除外する
        exclude: /node_modules/,
      }
    ],
  },
  // ソースマップを有効にする
  devtool: 'source-map',
  // ローカル開発用環境を立ち上げる
  // ブラウザで http://localhost:8081/ でアクセスできるようになる
  devServer: {
    contentBase: 'build',
    port: 8081
  },
};