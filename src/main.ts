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

const app = createApp(App)
// app.use(ElementPlus)
app.use(router).use(store).mount('#app')

// 打印环境变量配置内容
console.log(process.env.VUE_APP_TITLE)
console.log(process.env.VUE_APP_VERSION)
console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)

httpRequest.request({
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
  }
})
