module.exports = {
  filename: 'bundle.js',
  path: 'xxx',
  publicPath: ''
}

// 如果Html资源请求路径为 http://example.com/app/index.html
// bundle资源请求路径为 http://example.com/app/bundle.js

module.exports = {
  filename: 'bundle.js',
  path: 'xxx',
  publicPath: './assets'
}

// 如果Html资源请求路径为 http://example.com/app/index.html
// bundle资源请求路径为 http://example.com/app/assets/bundle.js