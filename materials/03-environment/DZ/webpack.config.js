var webpack = require('webpack');
const path  = require('path');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'public/build'),
        publicPath: "build",
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: [/node_modules/, /public/], loader: "babel-loader" },
            {
                test: /\.css$/,
                exclude: [/node_modules/, /public/],
                // loaders: ['style-loader', 'css-loader', 'postcss-loader']
                loader: "style-loader!css-loader!postcss-loader"

            },
            {
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            },
            {
                test: /\.svg/,
                loader: "url-loader?limit=26000&mimetype=image/svg+xml"
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.jsx$/,
                // loader: "react-hot-loader!babel-loader",

                use: ['react-hot-loader/webpack'],
                exclude: [/node_modules/, /public/]
            },

        ]
    }
};