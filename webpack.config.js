const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'fec-reviews-dev.us-west-2.elasticbeanstalk.com/reviews':
      './Reviews/client/src/index.js',
    'trailblazer-pc.us-east-2.elasticbeanstalk.com/comparisons':
      './ProductComparisons/client/src/index.jsx',
    'fectrail-env.k3wc6evxm5.us-east-1.elasticbeanstalk.com/descriptions':
      './ProdcutDescription/client/src/index.jsx',
    'fectrailblazer-env.ckr33svztx.us-east-1.elasticbeanstalk.com/details':
      './Product-Details/client/src/index.jsx',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-react', '@babel/preset-env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'bundles'),
    publicPath: 'http://',
    filename: '[name].[contenthash].bundle.js',
  },
  plugins: [
    // new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
    new HtmlWebpackPlugin({
      title: 'Caching',
      template: 'indexTemplate.html',
    }),
    new CleanWebpackPlugin(['bundles']),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'fec-reviews-dev.us-west-2.elasticbeanstalk.com/vendors',
          chunks: 'all',
        },
      },
    },
  },
};
