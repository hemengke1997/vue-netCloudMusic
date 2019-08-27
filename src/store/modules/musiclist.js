const state = {
    musicList: []
}

const mutations = {
    SET_MUSIC_LIST: (state,musicList) => {
        state.musicList = musicList
    }
}

const actions = {
    setMusicList({commit},music) {
        return new Promise(() => {
            commit('SET_MUSIC_LIST',music)
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}