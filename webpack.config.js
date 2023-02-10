// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist'),
//     clean: true,
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: 'Capstone Module 2',
//       inject: 'body',
//       template: path.resolve(__dirname, 'src', 'index.html'),
//       filename: 'index.html',
//     }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.(png|jpe?g|gif|svg)$/i,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               name: '[name].[ext]',
//               outputPath: 'assets/images/',
//             },
//           },
//         ],
//       },
//       {
//         test: /\.html$/,
//         use: ['html-loader'],
//       },
//     ],
//   },
//   devServer: {
//     static: './dist',
//     hot: true,
//   },
//   mode: 'development',
// };
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
