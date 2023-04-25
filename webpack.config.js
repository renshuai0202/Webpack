module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js"
  },
  mode: "development",
  devServer: {
    static: './dist',
    port: 3000
  }
}