
    extractTextPlugin = require('extract-text-webpack-plugin')
// webpack.config.js
module.exports = {
  entry: './entry.jsx',

  output: {
    filename: 'bundle.js',
    path: './',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      // { test: /\.css$/, loader: 'css-loader' },
      // Finds .sass files and loads them
      { test: /\.scss$/, loader: extractTextPlugin.extract('css!sass'), exclude: /node_modules/},
      // Finds .jsx files and loads them using the jsx loader
      { test: /\.jsx$/, loader: 'jsx-loader' }
    ]
  }
  plugins: [
    new extractTextPlugin('style.css', {
            allChunks: true
        })
  ]

}
