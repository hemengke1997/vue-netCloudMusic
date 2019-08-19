import axios from 'axios'
import {HOST} from 'js/config'

// 可选参数：limit： 取出评论数量 , 默认为 20
function getComments(id) {
    const url = HOST + `/comment/playlist?id=${id}&limit=15`
    return axios.get(url)
}

function getUserPlaylist(id) {
    const url = HOST + `/user/playlist?uid=${id}`
    return axios.get(url)
}

function getUser(id) {
    const url = HOST + `/user/detail?uid=${id}`
    return axios.get(url)
}

export  {
    getComments,
    getUserPlaylist,
    getUser
}