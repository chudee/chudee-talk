const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  devtool: "eval-source-map",
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  entry: "./src/index.js",
  // entry: {
  //   index: ['babel-polyfill', path.resolve(__dirname, 'src') + '/index.js']
  // }
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js",
    publicPath: "/"
  },
  devServer: {
    publicPath: "/",
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "public"),
    compress: true,
    hot: true,
    open: true,
    // proxy: {
    //   "**": "http://localhost:3000" // express 서버주소
    // }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new ExtractTextPlugin({
      filename: "[name].css"
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: "[name].map",
      compress: false,
      sourceMap: true,
      mangle: false,
      beautify: true,
      module: true
    }),
    new webpack.ProvidePlugin({})
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "stage-2", "react"],
            cacheDirectory: true,
            plugins: ["react-hot-loader/babel"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["css-hot-loader"].concat(
          ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              "css-loader",
              {
                loader: "postcss-loader",
                options: {
                  ident: "postcss",
                  plugins: () => [
                    require("postcss-flexbugs-fixes"),
                    autoprefixer({
                      browsers: [
                        ">1%",
                        "last 4 versions",
                        "Firefox ESR",
                        "not ie < 9" // React doesn't support IE8 anyway
                      ],
                      flexbox: "no-2009"
                    })
                  ]
                }
              }
            ]
          })
        )
      },
      {
        test: /\.scss$/,
        use: ["css-hot-loader"].concat(
          ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  sourceMap: true,
                  camelCase: true,
                  modules: true,
                  localIdentName: "[local]_[name]_[hash:base64:5]"
                }
              },
              {
                loader: "postcss-loader",
                options: {
                  ident: "postcss",
                  plugins: () => [
                    require("postcss-flexbugs-fixes"),
                    autoprefixer({
                      browsers: [
                        ">1%",
                        "last 4 versions",
                        "Firefox ESR",
                        "not ie < 9" // React doesn't support IE8 anyway
                      ],
                      flexbox: "no-2009"
                    })
                  ],
                  sourceMap: true
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        )
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "./assets/[name].[hash].[ext]"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ["node_modules"],
    alias: {
      assets: path.resolve(__dirname, "assets"),
      Components: path.resolve(__dirname, "src/components/"),
      Containers: path.resolve(__dirname, "src/containers/"),
      Pages: path.resolve(__dirname, "src/pages/")
    }
  }
};
