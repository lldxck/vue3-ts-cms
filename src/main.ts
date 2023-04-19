import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// // 全局引入element-plus
// import ElementPlus from 'element-plus'
// // 全局引入elementPlus样式
// import 'element-plus/dist/index.css'

import './service/axios_demo'

const app = createApp(App)
// app.use(ElementPlus)
app.use(router).use(store).mount('#app')

// 打印环境变量配置内容
console.log(process.env.VUE_APP_TITLE)
console.log(process.env.VUE_APP_VERSION)
console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)
