var webpack = require('webpack');
var helpers = require('./helpers');
var path = require('path');
var tslint = require('../tslint.json');
var folder = path.join(__dirname, '../');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.resolve(__dirname, "../src"), 'src', "node_modules"],
    alias: {
      assets: folder + '/src/assets',
      ng1: folder + '/src/app/ng1' 
    }
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          tsConfigFile: tslint,
          // tslint errors are displayed by default as warnings
          // set emitErrors to true to display them as errors
          emitErrors: false,

          // tslint does not interrupt the compilation by default
          // if you want any file with tslint errors to fail
          // set failOnHint to true
          failOnHint: false
        }
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: helpers.root('./', 'tsconfig.json')
            }
          }, 'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'

      },
      // {
      //   test: /\.(png|jpe?g|gif|woff|woff2|ttf|eot|ico|mp4|xml)$/,
      //   use: 'file-loader'
      // },
      // {
      //   test: /\.css$/,
      //   exclude: helpers.root('src', 'app'),
      //   use: 'null-loader'
      // },
      // {
      //   test: /\.css$/,
      //   include: helpers.root('src', 'app'),
      //   use: 'raw-loader'
      // },
      // {
      //   test: /\.css$/,
      //   loaders: ['to-string-loader', 'css-loader']
      // },
      // {
      //   test: /\.less$/,
      //   include: helpers.root('src', 'app'),
      //   exclude: helpers.root('src', 'app', 'ng1'),
      //   loaders: ['raw-loader', 'less-loader'] 
      // },
      {
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: ['to-string-loader','raw-loader', 'sass-loader'],
        })
      },
      // all sass imports in ts without angular components 
      // {
      //   test: /\.(less)$/,
      //   include: helpers.root('src', 'app', 'ng1'),
      //   loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: "css-loader!less-loader" })
      // },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml&name=./webpack-assets/[name]/[hash].[ext]"
      },
      {
        enforce: 'post',
        test: /\.ts$|\.js$/,
        exclude: [
          /node_modules/,
          /\.spec\.js$/,
          /\.spec\.ts$/,
          // TODO. Fix js specs
          /\.js$/,
        ],
        loader: 'istanbul-instrumenter-loader'
      }
    ]
  },


  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)esm5/,
      helpers.root('src'),
      {}
    )
  ]
}
