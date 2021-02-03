import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from '@/store/vuex'

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  loading:'https://img95.699pic.com/photo/40166/9676.gif_wh860.gif'
})


// 定义事件总线
Vue.prototype.eventBus=new Vue()




// // 导入axios
// import axios from 'axios'

// // 设置基础域名
// axios.defaults.baseURL = "https://iynn.cn/film/api/v1/"

// // 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//   config.headers = {
//     "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1598087896889693885431809","bc":"110100"}',
//     "X-Host": "mall.film-ticket.film.list",
//   }

//   return config;
// }, function (error) {
//   return Promise.reject(errror)
// })
// axios.get("getCitiesInfo.json");

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
