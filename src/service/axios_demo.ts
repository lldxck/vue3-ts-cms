import axios from 'axios'

// 创建axios实例对象
// const instance = axios.create({})

// get请求
axios
  .get('http://123.207.32.32:8000/home/multidata')
  .then((res) => console.log(res))

// axios的全局默认配置
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000
axios.defaults.headers.common['Authorization'] = '123456789'

// get请求并且传参数
axios
  .get('/get', {
    params: {
      name: 'jack',
      age: 18
    },
    timeout: 60000
  })
  .then((res) => console.log(res))

// post请求
axios
  .post('/post', {
    data: {
      name: 'rose',
      age: 18
    }
  })
  .then((res) => console.log(res))

// axios.all() 多个请求一起返回
axios
  .all([
    axios.get('/get', {
      params: {
        name: 'jack',
        age: 18
      }
    }),
    axios.post('/post', {
      data: {
        name: 'rose',
        age: 18
      }
    })
  ])
  .then((res) => {
    console.log(res)
  })

// axios拦截器
// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    // 请求之前进行处理--添加token、添加loading动画
    console.log('请求拦截成功')

    return config
  },
  (err) => {
    console.log('请求发送错误')

    return err
  }
)

// 响应拦截器
axios.interceptors.response.use(
  (res) => {
    console.log('响应拦截成功')

    return res
  },
  (err) => {
    console.log('响应拦截失败')

    return err
  }
)

// 补充
// promise本身是可以有类型的
new Promise<string>((resolve) => {
  resolve('abc')
}).then((res) => {
  console.log(res)
})
