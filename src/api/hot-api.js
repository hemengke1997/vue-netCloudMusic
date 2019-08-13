import axios from 'axios'
import {HOST} from '@/assets/js/config'

function getHotSong() {
    const url = HOST + '/top/list?idx=1'
    return axios.get(url)
}

export {
    getHotSong
}