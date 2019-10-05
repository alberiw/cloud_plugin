const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: path.join(__dirname, '/public/index.html')
        }),
        new PrettierPlugin()
    ]
}