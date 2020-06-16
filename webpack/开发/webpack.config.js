const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');

// 由于过去的指南和代码示例遗留下来，导致我们的 /dist 文件夹相当杂乱。webpack 会生成文件，然后将这些文件放置在 /dist 文件夹中，但是 webpack 无法追踪到哪些文件是实际在项目中用到的。通常，在每次构建前清理
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 现在调整配置。我们将在 entry 添加 src/print.js 作为新的入口起点（print），
//然后修改 output，以便根据入口起点名称动态生成 bundle 名称
module.exports = {
    //多个文件入口
    entry: {
        app: './src/app.js',
        print: './src/print.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // 打包文件的输出目录
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: './dist'
    },
    //用于追踪错误
    devtool: 'inline-source-map',
    plugins: [
        //在打包前先把dist文件夹中的东西清空
        new CleanWebpackPlugin(),
        //创建一个新的index.html 带dist上
        //如果你在代码编辑器中将 index.html 打开，你就会看到 HtmlWebpackPlugin 创建了一个全新的文件，所有的 bundle 会自动添加到 html 中。
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ]
}