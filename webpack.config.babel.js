import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtensionReloader from 'webpack-extension-reloader'
import path from 'path'

module.exports = {
  entry: {
    'background': './src/js/background.js',
    'content': './src/js/content.js',
    'on_click': './src/js/on_click.js',
    'options': './src/js/options.js',
    'popup': './src/js/popup.js',
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src/js'),
      'node_modules'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'extensions/chrome/js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../html/options.html',
      template: 'src/pug/options.pug',
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: '../html/popup.html',
      template: 'src/pug/popup.pug',
      inject: false
    }),
    new ExtensionReloader({
      entries: {
        contentScript: 'content',
        background: 'background',
        extensionPage: 'options'
      }
    })
  ]
}