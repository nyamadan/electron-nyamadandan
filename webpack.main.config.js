const path = require("path");

const options = {
  mode: process.env["NODE_ENV"] || "development",

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

if(options.mode !== "production") {
  options.devtool = "source-map";
  options.module.rules.push({
    enforce: "pre",
    test: /\.js$/,
    loader: "source-map-loader"
  });
}

module.exports = options;
