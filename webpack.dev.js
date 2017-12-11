const webpack = require('webpack')
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path');
module.exports = merge(common, {
    devtool: '#cheap-module-eval-source-map',
    devServer: {
        contentBase: "./",
        open: true,
        port: 9000,
        inline: true,
        compress: false,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify('development')
        }),
        // extract css into its own file
        new ExtractTextPlugin({
            filename: 'css/[name].css'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html'),
            inject: true
        }),
    ]
});