const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config.js');
const SourceMapDevToolPlugin = require('webpack/lib/SourceMapDevToolPlugin');
const path = require('node:path');

module.exports = merge(webpackConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    hot: true,
    port: 3000,
    static: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new SourceMapDevToolPlugin({
      filename: '[file].map',
      exclude: [/node_modules/],
    }),
  ],
});