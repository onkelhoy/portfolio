const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.PUBLIC_PATH = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index.js',
  output: {
    path: process.env.PUBLIC_PATH,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader",],
      },
{
  test: /\.scss$/,
  use: [
    {
      loader: "style-loader" // creates style nodes from JS strings
    },
    {
      loader: "css-loader" // translates CSS into CommonJS
    },
    {
      loader: "sass-loader" // compiles Sass to CSS
    }
  ]
},
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.scss'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    open: true,
    historyApiFallback: true,
  }
}