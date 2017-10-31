const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src'); //__dirname 中的src目录，以此类推
var nodeEnv = process.env.NODE_ENV || 'development';
var isProd = nodeEnv === 'production';
const plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(APP_PATH, 'index.html'),
    inject: true
  }),
  // extract css into its own file
  new ExtractTextPlugin({
    filename: 'css/[name].css'
  }),
  // Compress extracted CSS. We are using this plugin so that possible
  // duplicated CSS from different components can be deduped.
  new OptimizeCSSPlugin({
    cssProcessorOptions: {
      safe: true
    }
  })
]
if (isProd) {
  plugins.push(
    new webpack.DefinePlugin({
      'process.env': nodeEnv
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    })
  )
} else {
  plugins.push(
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  )
}
module.exports = {
  devtool: isProd ? 'cheap-module-source-map' : 'eval',
  entry: {
    app: path.resolve(APP_PATH, 'index.js')
  },
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[id].[hash].js'
  },
  //webpack-dev-server配置
  devServer: {
    contentBase: path.resolve(__dirname, './src'),//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
    // colors: true,//在cmd终端中输出彩色日志
    historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    // hot: true,
    inline: true,//设置为true，当源文件改变时会自动刷新页面
    port: 8081,//设置默认监听端口，如果省略，默认为"8080"
    // progress: true,//显示合并代码进度
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
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
  plugins,
  resolve: {
    alias: {
      '@': APP_PATH
    },
    extensions: ['.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
  }
}