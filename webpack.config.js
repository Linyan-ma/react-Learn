<<<<<<< HEAD
const webpack = require('webpack')
const path = require('path')
// const HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src'); //__dirname 中的src目录，以此类推
module.exports = {
  devtool: 'eval-source-map',
  entry: {
    app: path.resolve(APP_PATH, 'index.js')
  },
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js',
  },
  //webpack-dev-server配置
  devServer: {
    contentBase: path.resolve(__dirname,'./src'),//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
    // colors: true,//在cmd终端中输出彩色日志
    historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    // hot: true,
    inline: true,//设置为true，当源文件改变时会自动刷新页面
    port: 8080,//设置默认监听端口，如果省略，默认为"8080"
    // progress: true,//显示合并代码进度
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader", options: {
            sourceMap: true
          }
        }, {
          loader: "sass-loader", options: {
            sourceMap: true
          }
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
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
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias:{
      '@':APP_PATH
    },
    extensions: ['.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
  }
=======
const webpack = require('webpack')
const path = require('path')
// const HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src'); //__dirname 中的src目录，以此类推
module.exports = {
  devtool: 'eval-source-map',
  entry: {
    app: path.resolve(APP_PATH, 'index.js')
  },
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js',
  },
  //webpack-dev-server配置
  devServer: {
    contentBase: path.resolve(__dirname,'./src'),//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
    // colors: true,//在cmd终端中输出彩色日志
    historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    // hot: true,
    inline: true,//设置为true，当源文件改变时会自动刷新页面
    port: 8080,//设置默认监听端口，如果省略，默认为"8080"
    // progress: true,//显示合并代码进度
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader", options: {
            sourceMap: true
          }
        }, {
          loader: "sass-loader", options: {
            sourceMap: true
          }
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
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
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias:{
      '@':APP_PATH
    },
    extensions: ['.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
  }
>>>>>>> 2fdc2b0eaeaf32c160a41960fbbca76aac02f799
}