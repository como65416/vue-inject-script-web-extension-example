const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require('vue-loader')
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: {
    'content-script': './content-script-main.js'
  },
  output: {
    filename: '[name]-bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, './public/dist'),
    publicPath: 'public/dist/'
  },
  module: {
    rules: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        exclude: /(node_modules|bower_components)/,
        use: ['vue-loader'],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=50000'
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin(),
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name]-bundle.css`,
    }),
    new VueLoaderPlugin()
  ]
};
