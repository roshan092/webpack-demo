const baseWebpackConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');
const webpack = require('webpack');

const buildEnv = process.env.BUILD_ENV || 'prod';

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require(`../config/${buildEnv}.env`)
        }),
    ]
});

module.exports = webpackConfig;