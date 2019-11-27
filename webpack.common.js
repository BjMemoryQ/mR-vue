const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

module.exports = {
  entry: './src/app.js', // 打包开始文件
  module: {
    rules: [{
      test: /\.vue$/,
      use: {
        loader: 'vue-loader'
      }
    }, {
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
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            useBuiltIns: 'usage',
            corejs: 3
          }]
        ]
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([{
      from: path.join(`${__dirname}/public/favicon.ico`),
      to: path.join(`${__dirname}/dist/favicon.ico`)
    }, {
      from: path.join(`${__dirname}/public/base.css`),
      to: path.join(`${__dirname}/dist/base.css`)
    }]),
    new VueLoaderPlugin()
  ],
  output: {
    filename: 'dist.js', // 输出的打包文件
    path: path.resolve(__dirname, 'dist') // 打包文件夹
  }
}
