const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js"); // 引用公共的配置
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 用于将组件的css打包成单独的文件输出到`lib`目录中

const prodConfig = {
  mode: "production", // 生产模式
  entry: {
    index: path.join(__dirname, "../src/index.tsx"),
  },
  output: {
    path: path.join(__dirname, "../lib/"),
    filename: "index.js",
    libraryTarget: "umd", // 采用通用模块定义
    libraryExport: "default", // 兼容 ES6 Module、CommonJS 和 AMD 模块规范
    library: "tn-bar", // 打包后的库
    globalObject: "this",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /.css$/,
        exclude: /.min.css$/,
        use: [
          { loader: "style-loader" },
          // { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              modules: {
                namedExport: false,
                localIdentName: "[local]_[hash:base64:5]",
              },
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // 其他选项
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: "less-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.module.css", // 提取后的css的文件名
    }),
  ],
  externals: {
    // 定义外部依赖，避免把react和react-dom打包进去
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
    },
  },
};
module.exports = merge(prodConfig, baseConfig); // 合并配置
