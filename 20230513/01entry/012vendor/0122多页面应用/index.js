/**
 * 多页面应用
 *    每个页面单独打包一个bundle
 *    配合 vendor 
 *      1. 每个页面只加载必要的业务逻辑
 *      2. 第三方模块单独打包一个bundle
 */

module.exports = {
  entry: {
    pageA: './src/pageA.js',
    pageB: './src/pageB.js',
    pageC: './src/pageC.js',
    vendor: ['react', 'react-dom']
  }
}