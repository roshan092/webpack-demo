const baseWebpackConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');
const webpack = require('webpack');

const webpackConfig = merge(baseWebpackConfig, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require(`../config/dev.env`)
        }),
    ]
});

module.exports = webpackConfig;