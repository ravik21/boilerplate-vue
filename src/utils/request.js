import axios from 'axios'
import store from '@/store'
import * as config from '@/config'

const service = axios.create({
  baseURL: config.apiUrl, // api base_url
})

service.interceptors.request.use(
  config => {
    if(store.state.auth) {
      const token = store.state.auth.token;
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
