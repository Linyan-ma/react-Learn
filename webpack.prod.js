const common = require('./webpack.common.js');
const webpack = require('webpack')
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
module.exports = merge(common, {
    devtool: false,
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        // extract css into its own file
        new ExtractTextPlugin({
            filename: './css/[name].css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html'),
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }),
        // new ExtractTextPlugin({
        //     filename: utils.assetsPath('css/[name].[contenthash].css')
        // }),
        // new CleanWebpackPlugin(['dist']),
        new UglifyJSPlugin(),
        // split vendor js into its own file
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: function (module) {
                return module.context && module.context.indexOf("node_modules") !== -1;
            }
        }),
        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),
        // copy custom static assets
        // new CopyWebpackPlugin([
        //     {
        //         from: path.resolve(__dirname, '../static'),
        //         to: config.build.assetsSubDirectory,
        //         ignore: ['.*']
        //     }
        // ])
    ]
});