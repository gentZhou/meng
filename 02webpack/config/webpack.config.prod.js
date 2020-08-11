const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {

                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: (loader) => [
                                require('postcss-import')({ root: loader.resourcePath }),
                                require('postcss-preset-env')(),
                                require('cssnano')()
                            ]
                        }
                    },
                    {
                        loader: "less-loader" // compiles Less to CSS
                    },

                ],
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
                            name: "images/[hash:10].[ext]",
                        },
                    },
                ],
            },

            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                // include: path.resolve(__dirname, '../src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    // eslint options (if necessary)
                    fix: true,
                },
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
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new OptimizeCssAssetsPlugin({
            // assetNameRegExp: /\.css$/g,
            // cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            },
            // canPrint: true
        })
    ],
    mode: 'production',

    /*
      增强调试
      给JS生成xxx.map文件
        map文件中记录构建后代码和源代码的映射关系
        将来构建后代码报错，根据map文件的映射关系找到源代码的错误
        从而提示的是源代码的错误
    */
    // devtool: "eval-cheap-module-source-map", // 开发环境
    // devtool: 'cheap-module-source-map' // 生产环境 优点：速度快 缺点：提示相对更差
    devtool: 'source-map',// 生产环境：优点：提示更加友好 缺点：速度慢
    performance: false // 关掉性能提示
};