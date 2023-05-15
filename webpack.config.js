module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js"
  },
  mode: "development",
  devServer: {
    static: './dist',
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'force-strict-loader',
          sourceMap: true
        }

      }
    ]
  }
}