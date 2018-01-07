const path = require('path');
const webpack = require('webpack');

const shared = {
  output: {
    path: path.resolve('./build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['env', 'react'],
        },
      },
    ],
  },
  plugins: [
    // Use the NODE_ENV environment variable to determine whether
    // we use the production or development version of React.
    // Defaults to development when unset.
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
  ],
};

module.exports = [
  Object.assign({}, shared, {
    target: 'web',
    entry: {
      client: './client',
    },
  }),
  Object.assign({}, shared, {
    target: 'node',
    entry: {
      server: './server',
    },
  }),
];
