const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'client', 'src', 'index.jsx'),
  },

  output: {
    path: path.resolve(__dirname, 'client', 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/',
  },

  // devtool: 'source-map',

  module: {
    // apply loaders to files that meet given conditions
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
              minimize: true,
            },
          }, {
            loader: 'less-loader',
          }],
      },
    ],
  },
  plugins: [
    // 将node_modules里的依赖整合成一个vendor
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        // 该配置假定你引入的 vendor 存在于 node_modules 目录中
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    }),

    // 根据manifest生成插入script后的html
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'server', 'static', 'index_template.html'),
      chunksSortMode: 'dependency',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),

    // 将js文件压缩成gz
    new CompressionPlugin(),

    // 允许创建一个在编译时可以配置的全局常量
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),

    // 压缩
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      // sourceMap: true,
    }),
    new WebpackMd5Hash(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
