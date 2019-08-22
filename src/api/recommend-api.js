import axios from 'axios'
import {HOST} from 'js/config'

function getSheetList() {  // 获取推荐歌单
    const url = HOST + '/personalized'
    return axios.get(url)
}

function getNewSong() {  // 最新音乐
    const url = HOST + '/personalized/newsong'
    return axios.get(url)
}

function getSheetDetails(id) {
    const url = HOST + `/playlist/detail?id=${id}`
    return axios.get(url)
}



export {
    getSheetList,
    getNewSong,
    getSheetDetails,
}




