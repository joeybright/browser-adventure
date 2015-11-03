
// webpack.config.js
module.exports = {
  entry: './entry.jsx',

  output: {
    filename: 'bundle.js',
    path: './webpack-build',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      // Finds .jsx files and loads them using the jsx loader
      { test: /\.jsx$/, loader: 'jsx-loader' }
    ]
  }

}
