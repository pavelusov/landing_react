const path = require('path');
const webpack = require('webpack');
const rules = require('./config/webpack/rules');

// plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// environment




module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';
  console.log('ARGV ARGV', argv.mode, isDev);

  const config = {
    entry: {
      vendor: [
        'react',
        'react-dom',
        'babel-polyfill'
      ],
      app: './src/index.js'
    },

    output: {
      path: path.join(__dirname, "/dist"),
      filename: 'public/[name].bundle.js',
      publicPath: '/',
      sourceMapFilename: 'public/[name].[chunkhash].bundle.map',
      chunkFilename: 'public/[id].[chunkhash].chunk.js',
    },

    module: {
      rules: [
        rules.js,
        rules.jsx,
        rules.scss(isDev)
      ]
    },

    devtool: isDev ? 'eval-source-map' : '',

    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      host: '0.0.0.0',
      port: 5000,
      hot: false,
      compress: true,
      publicPath: '/',
      historyApiFallback: true
    },

    plugins: [
      new HtmlWebpackPlugin({
        hash: true,
        template: "./src/index.html",
        chunks: [
          'vendor',
          'app'
        ],
        chunksSortMode: 'manual'
      }),
      new MiniCssExtractPlugin({
        filename: "public/[name].css",
        chunkFilename: "public/[id].css"
      }),
      new webpack.HotModuleReplacementPlugin()
    ].concat(
      isDev
        // plugins for development bundle
        ? []
        // plugins for production bundle
        : [
          new UglifyJsPlugin({
            sourceMap: false
          })
        ]
    ),
    optimization: {
      splitChunks: {
        chunks: 'async',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    }
  };

  return config;
};
