const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 重新设置file-loader处理图片后的路径
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "img/[name].[ext]",
            esModule: false,
            // 单位是字节
            limit: 10000,
          },
        },
      },
      {
        test: /\.(htm|html)/,
        use: "html-withimg-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
};
