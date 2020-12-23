import axios from 'axios'
import { getUnixTime } from 'date-fns'
import md5 from 'md5'

const api = axios.create({
  baseURL: 'https://gateway.marvel.com',
})

api.interceptors.request.use((config) => {
  if (!config.params) config.params = {}
  config.params.ts = getUnixTime(new Date())
  config.params.apikey = 'b3507f4474d64e585a0260bc17e4a910'
  config.params.hash = md5(config.params.ts + 'bc6627139f4b650b0f25c7dc9eeeaa501917d0f5' + config.params.apikey)

  return config
})

export default api
