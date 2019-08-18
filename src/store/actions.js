import * as types from './mutation-typs'

const actions = {
    setMusicList({commit},music) {
        return new Promise(() => {
            commit(types.SET_MUSIC_LIST,music)
        })
    },
    setHotComment({commit},comment) {
        return new Promise(()=>{
            commit(types.SET_HOT_COMMENT,comment)
        })
    },
    setNewComment({commit},comment) {
        return new Promise(()=>{
            commit(types.SET_NEW_COMMENT,comment)
        })
    }
}

export default actions