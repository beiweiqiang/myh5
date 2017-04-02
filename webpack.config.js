const path = require('path');

process.noDeprecation = true;

module.exports = {
  // the entry file for the bundle
  entry: path.join(__dirname, '/client/src/index.jsx'),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
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
              sourceMap: true,
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

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  // watch: true
};
