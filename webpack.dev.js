const merge = require('webpack-merge')
const common = require('./webpack.common')

const config = {
  entry: './src/app.js', // 打包开始文件
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8088
  }
}

module.exports = merge(common, config)