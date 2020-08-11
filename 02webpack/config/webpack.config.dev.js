const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: './js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }],
            },
            {
                test: /\.(png|jpe?g|gif|wepb)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            // 小于12kb以下的图片会被base64处理
                            // 转化成base64 data url文本
                            // 优点：减少请求数量 缺点：体积更大
                            limit: 12 * 1024,
                            // [hash:10] -- hash值取10位
                            // [ext] -- 源文件扩展名
                            name: "./images/[hash:10].[ext]",
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
        ]
    },
    plugins: [
        // 处理html文件
        // 自动引入打包生成js和css
        new HtmlWebpackPlugin({
            // 以 './src/index.html' 为模板创建新html文件
            // 新文件会有源文件的结构，自动引入打包生成js和css
            template: './src/index.html'
        })
    ],
    mode: 'development',
    devServer: {
        // contentBase: path.resolve(__dirname, "../build"),
        port: 12138,
        // host: 'localhost',
        open: true, // 自动打开浏览器
        compress: true, // 启动gzip压缩
        // 开发时不要使用，开发完成在使用
        // clientLogLevel: 'none', // 让客户端打印内容少
        // quiet: true, // 让终端打印内容少
    },
    /*
      增强调试
      给JS生成xxx.map文件
        map文件中记录构建后代码和源代码的映射关系
        将来构建后代码报错，根据map文件的映射关系找到源代码的错误
        从而提示的是源代码的错误
    */
    devtool: "eval-cheap-module-source-map", // 开发环境
    // devtool: 'cheap-module-source-map' // 生产环境 优点：速度快 缺点：提示相对更差
    // devtool: 'source-map' // 生产环境：优点：提示更加友好 缺点：速度慢
};