const webpack = require('webpack');

module.exports = {
  //entry: ['./node_modules/babel-polyfill', './src/main.js'],
  entry: './src/main.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
   plugins: [
     new webpack.HotModuleReplacementPlugin()
   ],
  devServer: {
    contentBase: './dist',
    hot: true
  },
  devtool: 'source-map'
};