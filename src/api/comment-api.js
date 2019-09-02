import axios from 'axios'
import {HOST} from 'js/config'

// 可选参数：limit： 取出评论数量 , 默认为 20  歌单评论
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

// 获取单曲的评论 （取十条
function getSongComments(id) {
    const url = HOST + `/comment/music?id=${id}&limit=10`
    return axios.get(url)
}

// 获取专辑的评论
function getAlbumComments(id) {
    const url = HOST + `/comment/album?id=${id}&limit=15`
    return axios.get(url)
}

// 获取MV的评论
function getMvComments(id) {
    const url = HOST + `/comment/mv?id=${id}`
}
export  {
    getComments,
    getUserPlaylist,
    getUser,
    getSongComments,
    getAlbumComments,
    getMvComments
}