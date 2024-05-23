const path = require('path');

module.exports = {
  mode: 'development',
  entry: '../dashboard/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};