import type { AxiosRequestConfig } from 'axios'
export interface HttpRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (response: any) => any
  responseInterceptorCatch?: (error: any) => any
}

export interface HttpRequestConfig extends AxiosRequestConfig {
  interceptors?: HttpRequestInterceptors
  showLoading?: boolean
}
