const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')


const config = {
    target: "node",
    entry : './server/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
    }
}

module.exports = merge(baseConfig, config)
