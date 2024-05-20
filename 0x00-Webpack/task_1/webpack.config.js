const path = require('path');

module.exports = {
  mode: 'production', // or 'development'
  entry: './js/dashboard_main.js', // Path to your entry file
  output: {
    filename: 'bundle.js', // Name of the output bundle file
    path: path.resolve(__dirname, 'public'), // Output directory
  },
};
