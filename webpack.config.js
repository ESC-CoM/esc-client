/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LinkTypePlugin =
  require('html-webpack-link-type-plugin').HtmlWebpackLinkTypePlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const isAnalyze = process.argv.includes('--analyze');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  devServer: {
    historyApiFallback: true,
    port: 3000,
    static: { directory: path.resolve(__dirname, 'public') },
    compress: true,
  },
  entry: {
    main: './src/index',
  },
  devtool: isProduction ? false : 'eval-cheap-source-map',
  output: {
    pathinfo: false,
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
      '@styles': path.resolve(__dirname, './src/styles'),
      '@mocks': path.resolve(__dirname, './src/mocks'),
      extensions: ['.tsx', '.ts', '.js'],
    },
    fallback: {
      assert: require.resolve('assert/'),
      url: require.resolve('url/'),
      http: require.resolve('stream-http'),
      stream: require.resolve('stream-browserify'),
      https: require.resolve('https-browserify'),
      zlib: require.resolve('browserify-zlib'),
      timers: require.resolve('timers-browserify'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015',
        },
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
  optimization: {
    minimize: true,
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015',
        css: true,
      }),
    ],
  },
  plugins: [
    new Dotenv(),
    new webpack.DefinePlugin({}),
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
      : [new ForkTsCheckerWebpackPlugin()]),
    ...(isAnalyze ? [new BundleAnalyzerPlugin()] : []),
  ],
};
