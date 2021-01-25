import Vue from 'vue'
import axios from 'axios'
axios.defaults.baseURL = 'https://iynn.cn/film/api/v1/'

axios.interceptors.request.use(function (config) {
  let host = ''
  let info = config.headers.info
  if (info == 'info') {
    host = "mall.film-ticket.film.info"
  }
  config.headers = {
    "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1598087896889693885431809","bc":"110100"}',
    "X-Host": host,
  };
  return config;
},
  function (error) {
    return Promise.reject(error)
  }
)

export default axios