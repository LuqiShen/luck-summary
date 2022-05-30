const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    search: "./src/search.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  plugins:[
    // 单入口
    // new HtmlWebpackPlugin({
    //     template: './test.html'
    // })
    new HtmlWebpackPlugin({
        template: './test.html',
        filename: 'test.html',
        chunks: ['index']
    }),
    new HtmlWebpackPlugin({
        template: './search.html',
        filename: 'search.html',
        chunks:['search']
    })
  ]
};
