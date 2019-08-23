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

function getSimiSongs(id) {
    const url = HOST + `/simi/song?id=${id}`
    return axios.get(url)
}

function getSimiPlaylist(id) {
    const url = HOST + `/simi/playlist?id=${id}`
    return axios.get(url)
}

function getSongUrl(id) {
    const url = HOST + `/song/url?id=${id}`
    return axios.get(url)
}
export {
    getSong,
    getLyric,
    getSimiSongs,
    getSimiPlaylist,
    getSongUrl
}