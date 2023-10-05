const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devtool: "eval-source-map",
  devServer: {
    host: "localhost",
    port: 8080,
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "dist"),
      publicPath: "/",
    },
    proxy: {
      "/api/*": {
        target: "http://localhost:3000",
        secure: false,
      },
    },
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              ["@babel/preset-react", { targets: "defaults" }],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" }, // takes the converted string from CSS loader in JS files and injects them with <style> tags into DOM
          { loader: "css-loader" }, // bundles all CSS files referenced puts into a string
        ],
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        use: {
            loader: 'file-loader',
            // options: {
            //     name: './client/images/BRONZE.png'
            // }
        }
      },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./client/index.html"),
      filename: "./index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};

// const HtmlWebPackPlugin = require('html-webpack-plugin');
// const htmlPlugin = new HtmlWebPackPlugin({
//  template: './client/index.html',
//  filename: './index.html'
// });
// module.exports = {
//     entry: [,'./client/index.js'],
//     mode: 'development',
//   module: {
//     rules: [{
//    test: /\.js$/,
//    exclude: /node_modules/,
//    use: {
//      loader: 'babel-loader'
//    }
//  },
//   {
//    test: /\.css$/,
//    use: ['style-loader', 'css-loader']
//   }
// ]},
//  plugins: [htmlPlugin]
// };
