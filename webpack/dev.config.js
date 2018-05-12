/* eslint import/no-extraneous-dependencies: 0 */
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(baseConfig, {
    devtool: 'source-map',
    entry: {
        app: [
            'react-hot-loader/patch',
            path.join(process.cwd(), 'src/index.js')
        ]
    },
    devServer: {
        publicPath: '/',
        contentBase: path.join(process.cwd(), 'src'),
        hot: true
    },
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
});
