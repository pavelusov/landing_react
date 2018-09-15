const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  js: {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader"
    }
  },

  jsx: {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: ['babel-loader']
  },

  scss: function (isDev) {
    return {
      test: /\.(sa|sc|c)ss$/,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader',
      ],
    }
  }
};
