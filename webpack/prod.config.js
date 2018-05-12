/* eslint import/no-extraneous-dependencies: 0 */
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const VENDOR_LIBS = [
    'react', 'styled-components', 'react-dom', 'react-router', 'react-router-dom', 'react-ga', 'history', 'react-tap-event-plugin', 'react-universal-component'
];

module.exports = merge(baseConfig, {
    entry: {
        app: path.join(process.cwd(), 'src/index.js'),
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: '[name].[chunkhash].js'
    },
    performance: {
        hints: 'warning'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].[chunkhash].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new CompressionPlugin({
            cache: true,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
});
