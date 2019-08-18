import axios from 'axios'
import {HOST} from 'js/config'

// 可选参数：limit： 取出评论数量 , 默认为 20
function getHotComment(id) {
    const url = HOST + `/comment/hot?id=${id}&type=2&limit=20`
    return axios.get(url)
}

function getNewComment(id) {
    const url = HOST + `/comment/playlist?id=${id}&limit=20`
    return axios.get(url)
}

export default {
    
}