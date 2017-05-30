const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpackMerge = require('webpack-merge');


const DEVELOPMENT_PORT = 8080;
const isProduction = process.env.NODE_ENV === 'production';

process.noDeprecation = true;

const webpackCommon = {
  output: {
    filename: 'bundle.js',
    // filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, './client/dist'),
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
    ],
  },

  plugins: [
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
};

const webpackDevelopment = {
  context: path.resolve(__dirname, './client/src'),

  // entry: {
  //   vendor: [
  //     'react',
  //     'react-color',
  //     'react-dnd',
  //     'react-dnd-html5-backend',
  //     'react-dom',
  //     'react-draggable',
  //     'react-hot-loader',
  //     'react-onclickoutside',
  //     'react-redux',
  //     'react-rnd',
  //     'react-router-dom',
  //     'react-router-redux',
  //     'react-tap-event-plugin',
  //     'react-transition-group',
  //   ],
  //   bundle: [
  //     'react-hot-loader/patch',
  //     // activate HMR for React

  //     'webpack-dev-server/client?http://localhost:8080',
  //     // bundle the client for webpack-dev-server
  //     // and connect to the provided endpoint

  //     'webpack/hot/only-dev-server',
  //     // bundle the client for hot reloading
  //     // only- means to only hot reload for successful updates

  //     './index.jsx',
  //     // the entry point of our app
  //   ],
  // },

  entry: [
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

  output: {
    // filename: '[name].[chunkhash].js',

    publicPath: 'http://localhost:8080/',
    // necessary for HMR to know where to load the hot update chunks
  },

  devtool: 'inline-source-map',
  // devtool: 'eval',

  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,

    inline: true,
    // Inline mode is recommended when using Hot Module Replacement.

    // contentBase: path.resolve(__dirname, './client/dist'),
    // match the output path

    publicPath: 'http://localhost:8080/',
    // match the output `publicPath`

    host: 'localhost',
    port: 8080,
    proxy: {
      '/': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },

  module: {
    rules: [
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
    // new webpack.optimize.CommonsChunkPlugin({
      // name: ['vendor'],
      // minChunks: Infinity,
      // filename: 'common.js',
    // }),

    // HMR
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],
};

const webpackProduction = {
  // the entry file for the bundle
  entry: path.join(__dirname, '/client/src/index.jsx'),

  module: {
    // apply loaders to files that meet given conditions
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
            options: {
              minimize: true,
            },
          }, {
            loader: 'less-loader',
          }],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(), // Merge chunks
    new UglifyJSPlugin(),
  ],
};

module.exports = webpackMerge(
  webpackCommon,
  isProduction ? webpackProduction : webpackDevelopment
);
