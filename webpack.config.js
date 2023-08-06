const path = require("path");

module.exports = {
  entry: {
    app: "./index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              query: { preset: ["env"] },
            },
          },
        ],
        use: "babel-loader",
        exclude: /node_modules/,
        // query: { preset: ["env"] },
      },
    ],
  },
  mode : 'production'
};
