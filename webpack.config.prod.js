const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

process.noDeprecation = true;


module.exports = {
  // the entry file for the bundle
  entry: path.join(__dirname, '/client/src/index.jsx'),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, '/client/dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',

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
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(), // Merge chunks
    new UglifyJSPlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  // watch: true
};
