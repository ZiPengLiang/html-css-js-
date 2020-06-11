const config = {
    //配置入口文件
    entry: {
        //分离应用程序（APP）
        app: '../start/main.js',
        //第三方库(vendor)入口
        vendor: '../js/base.js'
    },
    //配置输出
    // 配置 output 选项可以控制 webpack 如何向硬盘写入编译文件。注意，即使可以存在多个入口起点，但只指定一个输出配置。
    output: {
        filename: 'base.js',
        path: './dist',
        //上述2行代码表示将单独一个base.js 文件输出到dist文件夹中

        // 假如配置了多个入口起点
        // filename: '[name].js',
        // path:__dirname+'/dist'
        //写到硬盘 ./dist/main.js 和 ./dist/base.js

    },

    //提供 mode 配置选项，告知 webpack 使用相应模式的内置优化
    mode: 'production',
    // loader 用于对模块的源代码进行转换。
    module: {
        rules: [
            //简单版
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.ts$/, use: 'ts-loader' },
            //module.rules 允许你在 webpack 配置中指定多个 loader
            {
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    }

}
module.exports = config