const path = require('path')
    // webpack.config.js是 webpack 默认的配置文件名
module.exports = {
    entry: {
        app: './app.js'
    },
    output: {
        publicPath: __dirname + '/dist/', // js引用路径或者CDN地址
        path: path.resolve(__dirname, 'dist'), // 打包文件的输出目录
        filename: 'bundle.js'
    }
}