const path      = require('path');
// const webpack   = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module:{
        rules:[
            {
                test: /\.js/,
                include: path.join(__dirname, 'src'),
                use: [
                    {
                        loader: 'babel-loader', options: {presets: ["react", "env", "react-hmre"]}
                    }
                ]

            }
        ]
    }
}
