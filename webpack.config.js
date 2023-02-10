const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  devtool: 'eval-source-map',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            // Turn off esModule setting 👇
            options: {
              esModule: false,
            },
          },
        ],
      },

      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: './dist',
    hot: true,
  },
  mode: 'development',
};
