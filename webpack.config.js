const path = require('path')

module.exports = env => ({
  mode: env.NODE_ENV,
  entry: './webpack/main.js',
  // devtool: 'cheap-module-source-map',
  devtool: false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
})
