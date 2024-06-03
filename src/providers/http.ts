import { AUTH_TOKEN_KEY } from '@/constants/common.constants'
import { getItem } from '@/helpers/storage'
import axios from 'axios'

const baseUrl = 'https://api.realworld.io/api'

const http = axios.create()
const httpClient = axios.create()

http.interceptors.request.use((config) => {
  config.baseURL = baseUrl

  return config
})

httpClient.interceptors.request.use((config) => {
  if (getItem(AUTH_TOKEN_KEY)) {
    config.headers['Authorization'] = `Token ${getItem(AUTH_TOKEN_KEY)}`
  }

  config.baseURL = baseUrl

  return config
})

export { http, httpClient }
