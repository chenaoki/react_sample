const path = require('path');

module.exports = {
  entry : {
    bundle : './src/app.js'
  },
  output : {
    path: path.join( __dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        exclude: /node_mudules/,
        test: /\.js[x]?$/,
        query: {
          cacheDirectory: true,
          presets:[ 'react', 'es2015']
        }
      }
    ]
  }
};
