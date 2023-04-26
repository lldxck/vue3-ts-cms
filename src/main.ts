import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// // 全局引入element-plus
// import ElementPlus from 'element-plus'
// // 全局引入elementPlus样式
// import 'element-plus/dist/index.css'

// axios的基本语法
// import './service/axios_demo'
import httpRequest from './service'

import 'normalize.css'
import './assets/css/index.less'
// import '@unocss/reset/tailwind.css'
import 'uno.css'


import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// app.use(ElementPlus)
app.use(router).use(store).mount('#app')

// 打印环境变量配置内容
console.log(process.env.VUE_APP_TITLE)
console.log(process.env.VUE_APP_VERSION)
console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

httpRequest
  .request<DataType>({
    url: '/home/multidata',
    method: 'GET',
    interceptors: {
      requestInterceptor: (config) => {
        console.log('单独请求-请求成功拦截')
        return config
      },
      requestInterceptorCatch: (err) => {
        console.log('单独请求-请求失败拦截')
        return err
      },
      responseInterceptor: (res) => {
        console.log('单独请求-响应成功拦截')
        return res
      },
      responseInterceptorCatch: (err) => {
        console.log('单独请求-响应失败拦截')
        return err
      }
    },
    showLoading: false
  })
  .then((res) => {
    console.log(res)
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
