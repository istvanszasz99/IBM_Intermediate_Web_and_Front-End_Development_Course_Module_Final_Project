const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/script.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            favicon: "./src/favicon.ico",
        })
    ],
    output: {
        clean: true,
        libraryTarget: 'window'
    },
    module: {
        rules: [
            {
                test: /\.(css)$/i,
                type: "asset/resource",
                generator: {
                    filename: "[name][ext]",
                },
            },
        ],
    },
};