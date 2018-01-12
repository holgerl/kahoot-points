const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'app'),
  output: {
    path: __dirname + '/dist',
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
        loaders: ['babel-loader']
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
    ]),
  ]
}

// TODO: Add ESLint
// TODO: Sjekk at npm build gir samme resultat som npm start
// TODO: Sjekk at alt polyfilles på IE
// TODO: Add source mapping