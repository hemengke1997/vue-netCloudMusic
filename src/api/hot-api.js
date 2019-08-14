import axios from 'axios'
import {HOST} from 'js/config'

function getHotSong() {
    const url = HOST + '/top/list?idx=1'
    return axios.get(url)
}

function getHotSearch() {
    const url = HOST + '/search/hot'
    return axios.get(url)
}

export {
    getHotSong,
    getHotSearch
}