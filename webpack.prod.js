const merge = require('webpack-merge')
const common = require('./webpack.common')

const config = {
  mode: 'production',
  entry: './src/app.js', // 打包开始文件
  devtool: 'source-map'
}

module.exports = merge(common, config)
