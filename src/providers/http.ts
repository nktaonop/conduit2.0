import axios from 'axios'

const baseUrl = 'https://api.realworld.io/api'

const http = axios.create()

http.interceptors.request.use((config) => {
  config.baseURL = baseUrl

  return config
})

export { http }
