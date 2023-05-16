## 处理样式
1. 安装 extract-text-webpack-plugin
`npm install extract-text-webpack-plugin -D`

2. 配置
webpack.config.js
```javascript
module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          callback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugin: [
    new ExtractTextPlugin('bundle.css');
  ]
```
use：提取样式前，使用何loader处理.css
callback：当前插件无法处理样式时，使用何loader处理
