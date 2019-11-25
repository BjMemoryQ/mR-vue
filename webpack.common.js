const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/app.js', // 打包开始文件
  module: {
    rules: [{
      test: /\.png|jpg|gif$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name].[ext]', // placeholder  修改文件名称
          outputPath: 'images/',
          limit: 204800
        }
      }
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      options: {
        "presets": [
          ["@babel/preset-env", {
            useBuiltIns: 'usage',
            "corejs": 3
          }]
        ]
      }
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  }), new CleanWebpackPlugin()],
  output: {
    filename: 'dist.js', // 输出的打包文件
    path: path.resolve(__dirname, 'dist') // 打包文件夹
  }
}