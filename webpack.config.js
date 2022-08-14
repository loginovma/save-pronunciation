const path = require('path');

module.exports = {
  entry: './src/content-script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'content-script.js'
  }
}