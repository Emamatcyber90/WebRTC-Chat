const path = require('path');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist/public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
                options: {
                    presets: ['react', 'es2015', 'stage-0', 'stage-2'],
                }
            }
        ]
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist/public'),
      watchContentBase: true,
      open: true,
      port: 8080,
  }
};