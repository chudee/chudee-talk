const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/server.js',
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: "/"
  },
  target: 'node',
  resolve: {
    modules: [path.resolve('./src'), 'node_modules'],
  },
  devServer: {
    publicPath: "/",
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "public"),
    compress: true,
    hot: true,
    open: true
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      },
    ]
  }
}