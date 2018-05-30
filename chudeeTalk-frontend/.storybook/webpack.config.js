// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require("path");

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
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
    alias: {
      assets: path.resolve(__dirname, "../assets"),
      Components: path.resolve(__dirname, "../src/components/"),
      Containers: path.resolve(__dirname, "../src/containers/"),
      Pages: path.resolve(__dirname, "../src/pages/")
    }
  }
};
