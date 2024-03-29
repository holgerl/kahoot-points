const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ["babel-polyfill", path.resolve(__dirname, 'app')],
  output: {
    path: __dirname + '/docs',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loaders: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/, 
        use: ExtractTextPlugin.extract({
          loader: 'css-loader',
          options: {
            url: false, // TODO: Try removing
           },
        }),
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'public/font', to: 'font' },
      { from: 'public/css', to: 'css' },
      { from: 'public/index.html', to: 'index.html' },
    ]),
  ]
}

// TODO: Add source mapping