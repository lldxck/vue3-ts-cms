import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { HttpRequestInterceptors, HttpRequestConfig } from './types'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

const DEFAULT_LOADING = true
class HttpRequest {
  instance: AxiosInstance
  interceptors?: HttpRequestInterceptors
  loading?: LoadingInstance
  showLoading?: boolean
  constructor(config: HttpRequestConfig) {
    // 创建axios实例对象
    this.instance = axios.create(config)
    // 保存基本信息
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

    // 拦截器----从config中取出的拦截器（对应的实例的拦截器）
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加公共的拦截器---所有实例默认的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('公共拦截器-请求成功拦截')

        if (this.showLoading) {
          // 解决Do not use "@ts-ignore" because it alters compilation errors加上下面内容
          // 按需引入不需要在element-plus内引入了（需要忽略一下ts检测）
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          this.loading = ElLoading.service({
            fullscreen: true,
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }

        return config
      },
      (err) => {
        console.log('公共拦截器-请求失败拦截')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('公共拦截器-响应成功拦截')
        // 移除loading
        this.loading?.close()
        // 处理错误信息
        if (res.data.returnCode != 'SUCCESS') {
          console.log('请求失败～')
        } else {
          return res.data
        }
      },
      (err) => {
        console.log('公共拦截器-响应失败拦截')
        // 移除loading
        this.loading?.close()
        // 处理错误信息--判断不同的httpErrorCode显示不同的错误信息
        if (err.response.status == 404) {
          console.log('错误码404～')
        }
        return err
      }
    )
  }

  request<T>(config: HttpRequestConfig): Promise<T> {
    return new Promise((resolve, rejected) => {
      // 单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 判断是否需要显示loading
      if (config.showLoading == false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单个请求对响应res的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors?.responseInterceptor(res)
          }
          console.log(res)
          // 将showLoading设置为true，这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING

          // 将结果resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          // 将showLoading设置为true，这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING
          rejected(err)
          return err
        })
    })
  }

  get<T>(config: HttpRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T>(config: HttpRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  delete<T>(config: HttpRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch<T>(config: HttpRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default HttpRequest
