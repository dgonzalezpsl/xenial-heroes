module.exports = function (config) {
  const webpackConfig = require('./config/webpack.test');
  const webpack = require('webpack');
  webpackConfig.plugins = webpackConfig.plugins
  .filter(p => !(p instanceof webpack.optimize.CommonsChunkPlugin))
  .filter(p => !(p instanceof webpack.DefinePlugin));
  webpackConfig.devtool = 'inline-source-map';
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'karma-typescript'],
    // plugins: [
    //   require('karma-jasmine'),
    //   require('karma-chrome-launcher'),
    //   require('karma-jasmine-html-reporter'),
    //   require('karma-coverage-istanbul-reporter'),
    //   require('karma-typescript-angular2-transform'),
    //   require('karma-typescript')
    // ],
    // client:{
    //   clearContext: false // leave Jasmine Spec Runner output visible in browser
    // },
    reporters: ['progress', 'coverage-istanbul'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    files: [
      "src/**/*.spec.ts"
    ],
    preprocessors: {
      'config/tests/tests.webpack.js': ['webpack', 'sourcemap']
    },
    // karmaTypescriptConfig: {
    //   bundlerOptions: {
    //       transforms: [
    //           require("karma-typescript-angular2-transform")
    //       ]
    //   }
    // },
    coverageIstanbulReporter: {
      reports: [ 'text-summary', 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true,
      dir: 'build/coverage'
    },
    concurrency: Infinity,
    files: [
      'config/tests/tests.webpack.js'
    ],
    webpack: webpackConfig,
    // Hide webpack build information from output
    webpackMiddleware: {
      noInfo: 'errors-only'
    },
  });
};
