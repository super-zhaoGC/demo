// 引入封装头信息和请求域名的axios对象
import http from './http'
// 引入请求的url地址
import {
  nowPlayingUri, comingSoonUri
} from '../config/url'

export const nowPlayingUriData=(page=1)=>{
  return http.get(nowPlayingUri)
}