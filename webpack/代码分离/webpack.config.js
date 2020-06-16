//默认参数

const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        another: './src/another-module.js'
    },
    plugins: [

        new HtmlWebpackPlugin({
            title: 'Code Splitting'
        }),

    ],

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    //除去重复的模块 --插件可以将公共的依赖模块提取到已有的入口 chunk 中
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
}