const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const config = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 3000,
    host: '0.0.0.0',
    static: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    compress: true,
    open: true,
  },
};

module.exports = merge(common, config);
