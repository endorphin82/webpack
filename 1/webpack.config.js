'use strict'
const NODE_ENV = process.env.NODE_ENV ||
module.exports = {
  mode: 'development',
  entry: './home.js',
  output: {
    filename: '../build.js',
    library: "home"
  },
  watch: true,

  watchOptions: {
    aggregateTimeout: 300
  },
  devtool: "cheap-inline-module-source-map"
  /*  devtool: "eval"*/
}
