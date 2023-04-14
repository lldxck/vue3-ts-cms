const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  // 配置方式一：通过CLI提供给我们的选项来配置
  outputDir: './build',
  transpileDependencies: true,
  lintOnSave: false,
  // 配置方式二：通过configureWebpack修改webpack配置(该对象将会被webpack-merge合并到最终的webpack配置中)
  // 值为对象
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    },
    plugins: [
      // 按需导入element-plus
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
  // 值为函数
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // },
  // 配置方式三：通过chainWebpack修改webpack的配置
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  // },
})
