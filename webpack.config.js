const webpackProduction = require('./webpack.prod.js');
const webpackDevelopment = require('./webpack.dev.js');


const isProduction = process.env.NODE_ENV === 'production';

process.noDeprecation = true;

module.exports = isProduction ? webpackProduction : webpackDevelopment;
