// 引入封装头信息和请求域名的axios对象
import http from './http'
// 引入请求的url地址
import {
  nowPlayingUri, comingSoonUri,detailUri,cinemaUri,cityUri
} from '../config/url'

export const nowPlayingUriData=(pageNum)=>{
  http.defaults.headers.info = ''
  http.defaults.headers.authorization=''
  return http.get(nowPlayingUri+pageNum)
}

export const comingSoonUriData=(pageNum)=>{
  return http.get(comingSoonUri+pageNum)
}

export const moveDetailData=(filmid)=>{
  http.defaults.headers.info = ''
  http.defaults.headers.authorization=''
  return http.get(detailUri+filmid)
}

export const cinemaListData=()=>{
  http.defaults.headers.info = ''
  http.defaults.headers.authorization=''
  return http.get(cinemaUri)
}

export const cityListData=async ()=>{
  http.defaults.headers.info = ''
  http.defaults.headers.authorization=''
  let ret=await http.get(cityUri)
  let cities=ret.data.data.cities
  let cityIndex=[]
  let dataList=[]
  let indexList=[]
  for(let i=65;i<=90;i++){
    cityIndex.push(String.fromCharCode(i))
  }
  cityIndex.forEach((index)=>{
    let tempArr=cities.filter((ele)=>{
      return index.toLowerCase()==ele.pinyin.substr(0,1)
    })
    if(tempArr.length>0){
      indexList.push(index)
      dataList.push({
        index,
        data:tempArr
      })
    }
  })

  return Promise.resolve([dataList,indexList])
}