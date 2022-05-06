/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LinkTypePlugin =
  require('html-webpack-link-type-plugin').HtmlWebpackLinkTypePlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isAnalyze = process.argv.includes('--analyze');
const isProduction = process.env.NODE_ENV === 'production';

const Dotenv = require('dotenv-webpack');

module.exports = {
  devServer: {
    port: 3000,
    historyApiFallback: true,
    compress: true,
    open: true,
  },
  entry: {
    main: './src/index',
  },
  devtool: isProduction ? 'cheap-source-map' : 'eval-cheap-source-map',
  output: {
    publicPath: '/',
    filename: '[name].[chunkhash:8].bundle.js',
    chunkFilename: '[name].[chunkhash:8].bundle.js',
    path: path.resolve(__dirname, './build'),
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      src: path.resolve(__dirname, './src'),
      extensions: ['.tsx', '.ts', '.js'],
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: '/node_modules/',
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.(jpe?g|gif|png|svg|ico)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'assets/images/[name].[ext]?[hash]',
            },
          },
        ],
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({}),
    new CleanWebpackPlugin(),
    new LinkTypePlugin({
      '**/*.css': 'text/css',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      templateParameters: {
        env: isProduction ? '' : '(develop)',
      },
      minify: isProduction
        ? {
            collapseWhitespace: true,
            removeComments: true,
          }
        : false,
    }),
    ...(isProduction
      ? [
          new MiniCssExtractPlugin({
            filename: '[name].[chunkhash:8].bundle.css',
          }),
        ]
      : []),
    ...(isAnalyze ? [new BundleAnalyzerPlugin()] : []),
    new Dotenv(),
  ],
};
