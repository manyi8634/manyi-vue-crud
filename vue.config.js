const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  productionSourceMap: false,
  css: {
    sourceMap: false
  },
  configureWebpack: {
    output: {
      // filename: 'index.js',
      libraryTarget: 'umd',
      library: 'ManyiVueCrud',
      umdNamedDefine: true
    }
  },
})
