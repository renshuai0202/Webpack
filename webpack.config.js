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
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: 'force-strict-loader',
      //     options: {
      //       sourceMap: true
      //     }
      //   }
      // }
      {
        test: /\.js$/, // 使用Babel处理所有的JS文件
        exclude: /node_modules/, // 排除node_modules文件夹
        use: {
          loader: 'babel-loader', // 使用Babel Loader
          options: {
            presets: ['@babel/preset-env'] // 使用@babel/preset-env预设
          }
        }
      }
    ]
  }
}