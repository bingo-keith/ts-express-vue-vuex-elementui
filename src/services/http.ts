import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from 'qs'

let baseURL: string = 'https://api.apiopen.top'
const http = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // TODO 后续增加配置
  baseURL: baseURL || process.env.VUE_APP_BASE_API,
  timeout: 1000 * 30,
  withCredentials: false, // 是否跨域是否允许携带cookie
  headers: {
    get: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    post: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  },
  maxContentLength: 2000,
  transformResponse: [
    (resdata, resheader) => {
      let data: any;
      try {
        data = JSON.parse(resdata)
      } catch (e) {
        data = JSON.parse(resdata)
      }
      return data
    }
  ]
})

http.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
}, error => {
  return Promise.reject(error)
})

http.interceptors.response.use(
  (response: AxiosResponse) => {
    return Promise.resolve(response)
  },
  error => {
    return Promise.reject(error)
  }
)

http.prototype.adornUrl = (actionName: string) => {
  return '/api' + actionName
}

http.prototype.adornParams = (params: object = {}) => {
  const timeStamp = { t: Date.now() }
  return Object.assign(timeStamp, params)
}

http.prototype.adornData = (data: object = {}, type: string = 'json') => {
  const timeStamp = { t: Date.now() }
  const params = Object.assign(timeStamp, data)
  return type === 'json' ? JSON.stringify(params) : qs.stringify(params)
}

export async function fetchGetProcess(api: string, option: object = {}) {
  let options: any = {
    url: http.prototype.adornUrl(api),
    method: 'get',
    params: {}
  }
  Object.assign(options, option)
  options.params = http.prototype.adornParams(options.params)
  let rs = await http(options)
  const { data: { code, msg, ...list } } = rs
  if(code !== 0) {
    alert(msg)
    return false
  }
  return {
    ...list,
    code
  }
}

export async function fetchPostProcess(api: string, option: object = {}) {
  let options: any = {
    url: http.prototype.adornUrl(api),
    method: 'post',
    data: {}
  }
  Object.assign(options, option)
  options.data = http.prototype.adornData(options.data)
  let rs = await http(options)
  const { data: { code, msg, ...list } } = rs
  if (code !== 0) {
    alert(msg)
    return false
  }
  return {
    ...list,
    code
  }
}

export default http