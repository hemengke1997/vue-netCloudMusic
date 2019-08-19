import * as types from './mutation-typs'

const actions = {
    setMusicList({commit},music) {
        return new Promise(() => {
            commit(types.SET_MUSIC_LIST,music)
        })
    },
    setComment({commit},comments) {
        return new Promise(()=>{
            commit(types.SET_COMMENT,comments)
        })
    },
    setHotCommentLength({commit},length) {
        return new Promise(()=> {
            commit(types.SET_HOT_COMMENT_LENGTH,length)
        })
    },
    setUser({commit},user) {
        return new Promise(()=>{
            commit(types.SET_USER,user)
        })
    },
    setUserPlaylist({commit},playlist) {
        return new Promise(()=>{
            commit(types.SET_USER_PLAYLIST,playlist)
        })
    }
}

export default actions