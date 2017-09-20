const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const project = require('./project.config')

const __DEV__ = project.env === 'development'
const __PROD__ = project.env === 'production'

module.exports = {
  entry: {
    app: project.paths.client('main.js'),
    vendor: [
      'axios',
      'vue'
    ]
  },
  output: {
    path: project.paths.dist(),
    filename: 'js/[name].[chunkhash:8].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json', '.vue']
  },
  devtool: 'source-map',
  name: 'client',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: project.paths.client()
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: project.paths.client(),
        options: {
          loaders: {
            scss: ExtractTextPlugin.extract({
              fallback: 'vue-style-loader',
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                    minimize: true,
                    modules: true,
                    localIdentName: '[name]__[local]--[hash:base64:5]'
                  }
                },
                {
                  loader: 'sass-loader'
                }
              ]
            })
          },
          postcss: require('./postcss.config')
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.[chunkhash:8].js',
      minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      __DEV__,
      __PROD__,
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      template: project.paths.client('index.html'),
      hash: false,
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      sourceMap: true
    }),
    new ExtractTextPlugin('css/[name].[contenthash:8].css')
  ]
}
