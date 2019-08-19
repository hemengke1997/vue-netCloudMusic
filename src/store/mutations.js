import * as types from './mutation-typs'
const mutations = {
    [types.SET_MUSIC_LIST](state,musicList) {
        state.musicList = musicList
    },
    [types.SET_COMMENT](state,comments) {
        state.comments = comments
    },
    [types.SET_HOT_COMMENT_LENGTH](state,length) {
        state.commentLength = length
    },
    [types.SET_USER](state,user) {
        state.user = user
    },
    [types.SET_USER_PLAYLIST](state,playlist) {
        state.playlist = playlist
    }
}
export default mutations
