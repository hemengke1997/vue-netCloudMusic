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
    }
}

export default actions