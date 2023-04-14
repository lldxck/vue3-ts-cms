import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// // 全局引入element-plus
// import ElementPlus from 'element-plus'
// // 全局引入elementPlus样式
// import 'element-plus/dist/index.css'

const app = createApp(App)
// app.use(ElementPlus)
app.use(router).use(store).mount('#app')
