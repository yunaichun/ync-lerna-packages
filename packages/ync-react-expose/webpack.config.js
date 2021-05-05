'use strict'
const path = require('path');

module.exports = {
  mode: 'production',

  entry: './src/index.js',

  output: {
    path: path.resolve('dist'),
    filename: `index.js`,
    publicPath: '',
    library: 'Expose',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },

  // devtool: '#eval-source-map',
  devtool: false,

  plugins: [
  ],

  externals: {
    'react': {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    'react-dom': {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    }
  }
}
