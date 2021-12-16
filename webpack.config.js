const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { config } = require("process")
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
function _path(p) {
  return path.join(__dirname, p);
}
const pages = [
  'home',
  'colors',
  'formElements',
  'search-room',
  'sign-in',
  'registration',
  'room-details'
];
function renderEntry(array) {
  let object = {}
  array.forEach(element => {
      object[`${element}`] = `./pages/${element}/${element}.js`
  });
  return object
}
const base = [];
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

pages.forEach(page => {
  base.push(
    new HTMLWebpackPlugin({
      filename: `./${page}.html`,
      template: `./pages/${page}/${page}.pug`,
      inject: true,
      chunks: [page],
    }),
    new MiniCssExtractPlugin({
      filename: `./css/[name].css`,
      ignoreOrder: true
    })
  );
});


module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: "development",
  entry: renderEntry(pages),
  //devtool: "source-map",
  output: {
    clean: true,
    path: path.resolve(__dirname, "dist"),
    filename: "./js/[name].js",
    //assetModuleFilename: 'img/[hash][ext][query]'
  },
  optimization: optimization(),
  devServer: {
    port: 3000,
    hot: isDev
  },
  plugins: base,
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
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
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
  resolve: {
    alias: {
      'jquery': _path('node_modules/jquery/dist/jquery'),
      'inputmask.dependencyLib': _path('node_modules/jquery.maskedinput/src/jquery.maskedinput'),
    },
  },
};
