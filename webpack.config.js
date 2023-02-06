const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    app: path.join(__dirname, "src", "index.tsx"),
  },
  target: "web",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
      {
        // this project use css, if you want to use scss just you can apply the rule bellow
        // test: /\.s[ac]ss$/i,
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        // use: [
        // In this project i didn't use a scss but you can use it by install sass-loader and apply this rule
        //   "style-loader",
        //   "css-loader",
        //   {
        //     loader: "sass-loader",
        //     options: {
        //       implementation: require("sass"),
        //       sassOptions: {
        //         fiber: false,
        //       },
        //     },
        //   },
        // ],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new Dotenv(),
    new ErrorOverlayPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  devtool: "cheap-module-source-map",
  devServer: {
    host: "0.0.0.0", //your ip address
    port: 8080,
  },
};
