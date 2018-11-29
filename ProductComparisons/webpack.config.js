const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {code: __dirname + '/client/src/index.jsx'},
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
   output: {
    filename: '[name][contenthash]bundle.js',
    path: __dirname + '/client/dist',
    publicPath: '/'
  },
  resolve: {
    extensions: [".jsx", ".js"] //resolves all .jsx and .js files so that you don't need these extensions when you import in other files.
  },
   plugins: [
    // new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
    new HtmlWebpackPlugin({
      title: 'Caching',
      template: 'indexTemplate.html',
    }),
  ],
  optimization: {
   splitChunks: {
     cacheGroups: {
       commons: {
         test: /[\\/]node_modules[\\/]/,
         name: 'nodeModules',
         chunks: 'all',
       },
     },
   },
 },
};