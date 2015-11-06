
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
      // { test: /\.css$/, loader: 'css-loader' },
      // Finds .sass files and loads them
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      // Finds .jsx files and loads them using the jsx loader
      { test: /\.jsx$/, loader: 'jsx-loader' }
    ]
  }

}
