const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { config } = require("process")
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (isProd) {
    config.minimizer = [
      new TerserWebpackPlugin()
    ]
  }

  return config
}
const plugins = () => {
  const base = [
   /* new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./pages/home/index.pug",
      minify: {
        collapseWhitespace: isProd
      },
      chunks: ["pages/main"]
    }),
    new HTMLWebpackPlugin({
      filename: "catalog.html",
      template: "./pages/catalog/catalog.pug",
      minify: {
        collapseWhitespace: isProd
      },
      chunks: ["pages/catalog"]
    }),
    new HTMLWebpackPlugin({
      filename: "./template/colors/colors.html",
      template: "./template/colors/colors.pug",
      minify: {
        collapseWhitespace: isProd
      },
      chunks: ["template/colors/colors"]
    }),*/
    new HTMLWebpackPlugin({
      filename: "./template/formElements/formElements.html",
      template: "./template/formElements/formElements.pug",
      minify: {
        collapseWhitespace: isProd
      },
      chunks: ["template/formElements/formElements"]
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "./css/[name].css",
    })
  ];
  return base
}
module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: "development", //проект собираем в режиме разработки
  entry: {
    //точка входа
    
    //"pages/main": "./pages/home/index.js",
    //"pages/catalog": "./pages/catalog/catalog.js",
    //"template/colors/colors": "./template/colors/colors.js",
    "template/formElements/formElements": "./template/formElements/formElements.js"
  },
  //devtool: "source-map",
  output: {
    //куда сохраняем
    clean: true,
    path: path.resolve(__dirname, "dist"), //__dirname-текущая директория
    filename: "./js/[name].js",
    //assetModuleFilename: 'img/[hash][ext][query]'
  },
  optimization: optimization(),
  devServer: {
    port: 3000,
    hot: isDev
  },
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|ico|svg|webp)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext][query]'
        }
      },
      /*{
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      },*/
      {
        test: /\.pug$/i,
        loader: 'pug-loader'
      }
    ],
  },
};
