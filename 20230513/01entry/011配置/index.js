/**
 * 配置的具体方式有：字符串、对象、数组、函数
 */

/**
 * 函数的返回值可以是字符串、对象、数组
 * 优点：
 *  1. 可以在函数内添加逻辑，动态地定义入口
 *  2. 支持异步操作
 */

module.exports = {
  entry: () => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('./index.js');
    }, 1000)
  })
}
