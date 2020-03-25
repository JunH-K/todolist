const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  name: 'todo-list',
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },

  entry: {
    app: ['./src/index'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],

  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[hash].js',
    // publicPath: 'dist/',
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};

module.exports = (env, { mode }) => {
  if (mode === 'production') {
    config.plugins = [...config.plugins, new CleanWebpackPlugin()];
  } else {
    config.mode = 'development';
    config.devtool = 'source-map';
  }

  return config;
};
