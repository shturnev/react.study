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
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                use: [
                    {
                        loader: 'babel-loader', options: {presets: ["react", "env", "stage-0", "react-hmre"]}
                    }
                ]

            },
            {
                test: /\.css$/,
                include: path.join(__dirname, 'src'),
                loaders: ['style-loader', 'css-loader']
                /*use: [
                    {
                        loaders: "style-loader!css-loader"/!* *!/
                    }y
                ]*/

            }
        ]
    }
}
