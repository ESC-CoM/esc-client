/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isAnalyze = process.argv.includes('--analyze');
const production = process.env.NODE_ENV || 'production';

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
        test: /\.(jp(e)?g|gif|png|svg|ico)$/,
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
        test: /\.(woff(2)?|ttf|eot|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'assets/fonts/[name].[ext]?[hash]',
            },
          },
        ],
      },
      {
        test: /\.(sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      templateParameters: {
        env: production ? '' : '(develop)',
      },
      minify: production
        ? {
            collapseWhitespace: true,
            removeComments: true,
          }
        : false,
    }),
    ...(isAnalyze ? [new BundleAnalyzerPlugin()] : []),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
