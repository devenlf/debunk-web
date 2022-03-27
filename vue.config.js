const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  overlay: { // 让浏览器 overlay 同时显示警告和错误
    warnings: true,
    errors: true
  },
  host: "localhost",
  port: 8080, // 端口号
  https: false, // https:{type:Boolean}
  open: false, //配置后自动启动浏览器
  hotOnly: true, // 热更新
  devServer: {
    proxy: 'http://192.168.31.103:7001/'
  }
})
