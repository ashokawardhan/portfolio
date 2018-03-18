/* eslint import/no-extraneous-dependencies: 0 */
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                ],
            },
        ],
    },
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
});
