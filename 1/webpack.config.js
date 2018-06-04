'use strict'

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require ('webpack');

module.exports = {
  mode: 'development',
  entry: './home.js',
  output: {
    filename: '../build.js',
    library: "home"
  },
  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 300
  },
  devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,
  /*  devtool: "eval"*/
  plugins: [
        new webpack.DefinePlugin({
          NODE_ENV: JSON.stringify(NODE_ENV),
          LANG: JSON.stringify('ru')
        })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
//          options: {
//            presets: ['@babel/preset-env']
//            plugins: [require('@babel/plugin-proposal-object-rest-spread')]
//          }
        }
      }
    ]
  }
}
