const path = require('path');

module.exports = {
  entry: './src/index.ts',
  devtool: 'eval-cheap-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'js.js',
    path: path.resolve(__dirname, 'www'),
  },
};
