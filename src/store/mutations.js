import * as types from './mutation-typs'
const mutations = {
    [types.SET_MUSIC_LIST](state,musicList) {
        state.musicList = musicList
    },
    [types.SET_COMMENT](state,comment) {
        state.hotComment = comment
    },
    [types.SET_NEW_COMMENT](state,comment) {
        state.newComment = comment
    }
}
export default mutations
