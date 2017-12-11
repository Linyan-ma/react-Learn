var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src'); //__dirname 中的src目录，以此类推
module.exports = {
    entry: {
        app: path.resolve(APP_PATH, 'index.js')
    },
    output: {
        path: path.resolve(ROOT_PATH, 'dist'),
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/[id].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader?sourceMap"
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            minimize: true, //css压缩
                            url: false  //Enable/Disable url() handling
                        }
                    }, {
                        loader: "sass-loader", options: {
                            sourceMap: true
                        }
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'img/[name].[hash:7].[ext]'
                        }
                    }
                ]
            },

            {
                test: /\.(js|jsx)$/,
                use: [
                    'babel-loader'
                ],
                exclude: /^node_modules$/,
                include: [APP_PATH]
            }
        ]
    },
    resolve: {
        alias: {
            '@': APP_PATH
        },
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
    }
}