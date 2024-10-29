const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: BASE_URL
})
let BASE_URL = process.env.NODE_ENV === 'production' ? '/plob-vue/' : '/'
