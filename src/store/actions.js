import * as types from './mutation-typs'

const actions = {
    setMusicList({commit},music) {
        return new Promise(() => {
            commit(types.SET_MUSIC_LIST,music)
        })
    }
}

export default actions