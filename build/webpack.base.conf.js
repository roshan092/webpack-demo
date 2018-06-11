const path = require('path');

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist/static'),
    }
};
