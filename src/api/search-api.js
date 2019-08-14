import {HOST} from 'js/config'
import axios from 'axios'

function getSearchList(keyword) {
    const url = HOST + `/search/suggest?keywords=${keyword}&type=mobile`
    return axios.get(url)
}

export {
    getSearchList,
}