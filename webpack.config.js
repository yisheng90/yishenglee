let HTMLWebpackPlugin = require('html-webpack-plugin')
let HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: __dirname + '/app/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: ['file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false']
      },
      {
        test: /\.pdf(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?minetype=application/pdf&name=[name].pdf'
      }
    ]
  },
  output: {
    filename: 'transformed.js',
    path: __dirname + '/docs'
  },
  plugins: [HTMLWebpackPluginConfig]
}
