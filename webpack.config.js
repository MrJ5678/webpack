const path = require("path");
const HtmlWebpaclPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle-[hash:8].js",
    path: path.resolve(__dirname, "dist"),
  },
  // devServer: {
  //   port: 3000,
  //   progress: true,
  //   contentBase: "./dist",
  //   compress: true,
  // },
  plugins: [
    new HtmlWebpaclPlugin({
      template: "./src/index.html",
      filename: "index.html",
      // minify: {
      //   removeAttributeQuotes: true,
      //   collapseWhitespace: true,
      // },
      // hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: "main.css",
      // chunkFilename: '[id].css',
    })
  ],
  module: { // loader 默认从右向左,从下到上执行
    rules: [
      {
        test: /\.css$/,
        use: [
          // {
          //   loader: "style-loader",
          //   options: {
          //     insert: function (element) {
          //       var parent = document.querySelector("head");
          //       var lastInsertedElement =
          //         window._lastElementInsertedByStyleLoader;
          //       if (!lastInsertedElement) {
          //         parent.insertBefore(element, parent.firstChild);
          //       } else if (lastInsertedElement.nextSibling) {
          //         parent.insertBefore(element, lastInsertedElement.nextSibling);
          //       } else {
          //         parent.appendChild(element);
          //       }
          //     },
          //   },
          // },
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader", 
        ],
      },
      {
        test: /\.less$/,
        use: [
          // { loader: "style-loader" }, 
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader", 
          "less-loader"
        ],
      },
      // {
      //   test: /.js$/,
      //   use: {
      //     loader: 'eslint-loader',
      //     options: {
      //       enforce: 'pre'
      //     }
      //   },
      //   exclude: /node_modules/
      // },
      {
        test: /\.js$/, // normal loader
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: { // 用babel-loader 将es6转换为es5
            presets: [
              '@babel/preset-env'
            ],
            plugins: [
              ['@babel/plugin-proposal-decorators', {"legacy": true}],
              ['@babel/plugin-proposal-class-properties', {"loose": true}],
              "@babel/plugin-transform-runtime"
            ]
          }
        }
      }
    ],
  },
  optimization: {
    minimizer: [
      // new UglifyJsPlugin({
      //   cache: true,
      //   parallel: true,
      //   sourceMap: true // set to true if you want JS source maps
      // }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
};
