var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
    },
    devtool: 'cheap-module-source-map',
    entry: './dev/js/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
        path: 'src',
        filename: 'js/bundle.min.js'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      })
    ]
};
