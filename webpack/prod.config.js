/* eslint import/no-extraneous-dependencies: 0 */
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const webpack = require('webpack');
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

const VENDOR_LIBS = [
    'react', 'styled-components', 'react-dom', 'react-router', 'react-router-dom', 'react-ga', 'history', 'react-universal-component', 'jss'
];

module.exports = merge(baseConfig, {
    entry: {
        app: path.join(process.cwd(), 'src/index.js'),
        vendor: VENDOR_LIBS
    },
    mode: 'production',
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: '[name].[chunkhash].js'
    },
    performance: {
        hints: 'warning'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: 'vendor',
                    name: 'vendor',
                    chunks: 'initial',
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
        new CompressionPlugin({
            cache: true,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
});
