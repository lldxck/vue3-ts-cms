import type { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface HttpRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (response: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface HttpRequestConfig extends AxiosRequestConfig {
  interceptors?: HttpRequestInterceptors
}
