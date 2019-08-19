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
    }
}
export default mutations
