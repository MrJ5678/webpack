const path = require("path");
const HtmlWebpaclPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle-[hash:8].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 3000,
    progress: true,
    contentBase: "./dist",
    compress: true,
  },
  plugins: [
    // 是数组
    new HtmlWebpaclPlugin({
      template: "./src/index.html",
      filename: "index.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
      },
      hash: true,
    }),
  ],
  module: {
    // 模块
    rules: [
      // css-loader, 解析@import这种写法
      // style-loader, 将css插入到html中
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              insert: function (element) {
                var parent = document.querySelector("head");
                var lastInsertedElement =
                  window._lastElementInsertedByStyleLoader;
                if (!lastInsertedElement) {
                  parent.insertBefore(element, parent.firstChild);
                } else if (lastInsertedElement.nextSibling) {
                  parent.insertBefore(element, lastInsertedElement.nextSibling);
                } else {
                  parent.appendChild(element);
                }
              },
            },
          },
          "css-loader"
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          'css-loader',
          'less-loader'
        ]
      }
    ],
  },
};
