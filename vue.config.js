const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
})
export default defineConfig({
  base:"/plob-api/",
  build:{
    outDir:"docs"
  }
})
