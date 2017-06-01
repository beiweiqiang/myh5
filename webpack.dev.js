const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const DEVELOPMENT_PORT = 8080;

module.exports = {
  context: path.resolve(__dirname, './client/src'),

  entry: {
    app: [
      'react-hot-loader/patch',
      // activate HMR for React

      'webpack-dev-server/client?http://localhost:8080',
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint

      'webpack/hot/only-dev-server',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates

      './index.jsx',
      // the entry point of our app
    ],
  },

  output: {
    path: path.resolve(__dirname, 'client', 'dist'),
    // filename: '[name].[chunkhash].js',
    filename: '[name].js',
    publicPath: '/',
    // necessary for HMR to know where to load the hot update chunks
  },

  devtool: 'inline-source-map',
  // devtool: '#cheap-module-eval-source-map',
  // devtool: 'eval',

  devServer: {
    historyApiFallback: true,

    // Inline mode is recommended when using Hot Module Replacement.
    inline: true,
    open: true,
    hot: true,
    overlay: {
      errors: true,
      warnings: true,
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
    // contentBase: path.resolve(__dirname, 'client', 'dist'),
    contentBase: '/',
    // match the output path

    publicPath: '/',
    // match the output `publicPath`

    // host: 'localhost',
    port: 8080,
    proxy: {
      '/**': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true,
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: path.join(__dirname, '/client/src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-0'],
          },
        },
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'less-loader',
          }],
      },
    ],
  },

  plugins: [
    // devServer
    // new webpack.HotModuleReplacementPlugin({
    //   multiStep: true,
    // }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        // 该配置假定你引入的 vendor 存在于 node_modules 目录中
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'server', 'static', 'index_template.html'),
      chunksSortMode: 'dependency',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),

    // HMR
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],
};
