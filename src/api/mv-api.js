import {HOST} from 'js/config'
import axios from 'axios'

// 获取mv的地址
function getMvUrl(id) {
  const url = HOST + `/mv/url?id=${id}`
  return axios.get(url)
}

// 获取相关推荐视频
function getRelated(id) {
  const url = HOST + `/related/allvideo?id=${id}`
  return axios.get(url)
}

// 获取mv的描述
function getMvDes(id) {
  const url = HOST + `/mv/detail?mvid=${id}`
  return axios.get(url)
}

// 获取mv的评论
function getMvComments(id) {
  const url = HOST + `/comment/mv?id=${id}`
  return axios.get(url)
}

export {
  getMvUrl,
  getRelated,
  getMvDes,
  getMvComments
}