const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: undefined,
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            //loader配置
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|webp)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: 'static/media/[name].[hash:10].[ext]'
                }
            },
            {
                test: /\.(html)$/,
                loader: 'html-loader',
                options: {
                    attributes: {
                        list: [
                            {
                                // Attribute name
                                attribute: "src",
                                // Type of processing, can be `src` or `scrset`
                                type: "src",
                                // Allow to filter some attributes (optional)
                                filter: (tag, attribute, attributes, resourcePath) => {
                                    // 过滤除img标签以外的元素
                                    // 只处理img图片
                                    return tag.toLowerCase() === "img";
                                },
                            },
                        ],
                    },
                }
            },
            {
                test: /\.vue$/,
                include: [path.resolve(__dirname, 'src')],
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        }),
        new VueLoaderPlugin(),
        // new CopyPlugin({
        //     patterns: [
        //         {
        //             from: path.resolve(__dirname, 'public'),
        //             to: path.resolve(__dirname, 'dist'),
        //             globOptions: {
        //                 //忽略 index.html 不复制
        //                 //原因:因为index.html已经被 HtmlWebpackPlugin处理过了
        //                 ignore: ['index.html'],
        //             },
        //         },
        //     ],
        // }),
        new CopyPlugin([

            {
                from: path.resolve(__dirname, 'public'),
                to: path.resolve(__dirname, 'dist'),
                //忽略 index.html 不复制
                //原因:因为index.html已经被 HtmlWebpackPlugin处理过了
                ignore: ['index.html'],
            },
        ],
        ),
    ],
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 12138,
        host: 'localhost',
        open: true,
        compress: true,
        hot: true, // 开启HMR功能：提升打包构建速度
        proxy: {
            "/api": {
                target: "http://localhost:5000",
                pathRewrite: {
                    "^/api": ""
                },
                // changeOrigin: true,
            }

        }

    },
    resolve: {
        //自动补全文件扩展名
        extensions: ['.js', '.vue', 'json']
    }
}