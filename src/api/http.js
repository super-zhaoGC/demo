// 引入
import axios from 'axios'

// 设置公共域名
axios.defaults.baseURL='https://iynn.cn/film/api/v1/' 

axios.interceptors.request.use(function(config){
  let host='mall.film-ticket.film.list'
  let info=config.headers.info;
  if('info'==info){
    host='mall.film-ticket.film.info'
  }
  if('cinema'==info){
    host='mall.film-ticket.cinema.list'
  }
  if(info=='city'){
    host='mall.film-ticket.city.list'

  }
  if(info=='cinemaDetail'){
    host='mall.film-ticket.cinema.info'
  }
  if(info=='cinemaFilm'){
    host='mall.film-ticket.film.cinema-show-film'
  }
  if(info=='showFilm'){
    host='mall.film-ticket.schedule.list'
  }
  // console.log(host);
  if(config.headers.authorization){
    config.headers={
      authorization:config.headers.authorization
    }
  }else{
    config.headers={
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16023011682963016333131777","bc":"110100"}',
      'X-Host': host,
    }
  }
  return config
},function(error){

})

// 导出
export default axios