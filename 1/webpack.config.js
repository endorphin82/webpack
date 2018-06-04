'use strict'

const NODE_ENV = process.env.NODE_ENV || 'development';

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
  devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null
  /*  devtool: "eval"*/
}
