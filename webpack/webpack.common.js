const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  output: {
    filename: '[name].[contentHash].bundle.js',
    path: path.resolve(__dirname, '..', 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [new HtmlWebpackPlugin({template: 'public/index.html'})]
};
