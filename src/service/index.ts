import HttpRequest from '@/service/request'

const httpRequest = new HttpRequest({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: process.env.VUE_APP_TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('实例请求成功拦截')

      // 1.携带token的拦截
      const token = '123456'
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }

      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('实例请求失败拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('实例响应成功拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('实例响应失败拦截')
      return err
    }
  }
})

export default httpRequest
