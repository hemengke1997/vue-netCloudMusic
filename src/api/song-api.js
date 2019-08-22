import {HOST} from 'js/config'
import axios from 'axios'

function getSong(id) {
    const url = HOST + `/song/detail?ids=${id}`
    return axios.get(url)
}

function getLyric(id) {
    const url = HOST + `/lyric?id=${id}`
    return axios.get(url)
}

export {
    getSong,
    getLyric
}