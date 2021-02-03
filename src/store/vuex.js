import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: { 
    cityname:'未知城市'

  },
  mutations: {
    setCity:function (state,cityName) {
      localStorage.setItem('cityName',cityName)
    }
  },
  actions: {
    
  },
})