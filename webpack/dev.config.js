/* eslint import/no-extraneous-dependencies: 0 */
const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
    mode: 'development',
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
    }
});
