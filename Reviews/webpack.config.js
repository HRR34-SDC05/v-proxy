const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
  entry: {
    inline: './client/src/inline.js',
    index: './client/src/index.js',
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
    path: path.resolve(__dirname, 'client/dist/'),
    publicPath: '../',
    filename: '[name].bundle.js',
  },
  plugins: [
    //    new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
    new HtmlWebpackPlugin({
      inlineSource: 'inline',
      title: 'Caching',
      template: 'indexTemplate.html',
    }),
    new HtmlWebpackInlineSourcePlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxSize: 20000,
    },
  },
};
