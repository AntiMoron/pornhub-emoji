const path = require('path');
const publicDistRoot = path.resolve(__dirname, '../public');

module.exports = {
    mode: 'production',
    output: {
        path: publicDistRoot,
        filename: '[name].min.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    entry: {
        index: path.resolve(__dirname, '../src/index.js')
    },
    plugins: [

    ]
};
