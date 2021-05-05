'use strict'
const webpack = require('webpack');
const path = require('path');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'production',

  entry: './src/index.js',

  output: {
    path: path.resolve('dist'),
    filename: `index.js`,
    publicPath: '',
    library: 'Modal',
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
      },
      {
        test: /\.(css|less)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        }),
      }
    ]
  },

  // devtool: process.env.NODE_ENV === 'production' ? '#nosources-source-map' : '#eval-source-map',

  plugins: [
    // == 压缩 Js 代码
    new UglifyPlugin(),
    // == 把 css 文件从 js 文件里面分离出来
    new ExtractTextPlugin('index.css'),
    // == 定义环境变量
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  // == 定义外部依赖，避免把react和react-dom打包进去
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
