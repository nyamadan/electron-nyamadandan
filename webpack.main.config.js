const path = require("path");

const options = {
  mode: process.env["NODE_ENV"] || "development",
  devtool: process.env["NODE_ENV"] === "production" ? false : "inline-source-map",
  target: "electron-main",
  entry: {
    index: './src/index.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".js", ".json"]
  },
  node: {
    __dirname: false,
    __filename: false
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
};

module.exports = options;
