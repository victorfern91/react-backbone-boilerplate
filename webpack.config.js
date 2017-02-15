const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const webpack = require('webpack');
  // config webpack plugins
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/app/index.html'),
  filename: 'index.html',
  inject: 'body',
});

const webpackConfig = {
  devtool: 'source-map',
  entry: ['./app/index.js'],
  module: {
    loaders: [{
      test: /\.jsx?$/, // regex pattern for .js and .jsx files
      exclude: /node_modules/,
      use: 'babel-loader',
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },
  plugins: [HTMLWebpackPluginConfig],
};

if (process.env.NODE_ENV === 'production') {
  // uglify code
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
      compress: {
        warnings: false,
      },
    }));
  // this used to compile React and another libs as production code
  webpackConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }));
} else {
  // see source maps in development
  webpackConfig.devtool = 'cheap-module-source-map';
}

module.exports = webpackConfig;
