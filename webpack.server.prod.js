const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const webpackNodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base.prod')

const config = {
  target: 'node',
  entry: './server/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  },
  externals: [webpackNodeExternals()],
  module: {
    loaders: [
      {
        test: /.scss$/,
        use: [
          'css-loader?modules&camelCase&localIdentName=',
          'sass-loader'
        ]
      }
    ]
  }
}

module.exports = merge(baseConfig, config)
