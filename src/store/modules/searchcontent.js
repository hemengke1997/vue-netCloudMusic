const state = {
    musicList: [],              // 搜索界面的歌曲列表
    keyword: '',        // 搜索关键字
}

const mutations = {
    SET_MUSIC_LIST: (state,musicList) => {
        state.musicList = musicList
    },
    SET_KEYWORD:(state,keyword) => {
        state.keyword = keyword
    }
}

const actions = {
    setMusicList({commit},music){
        return new Promise(()=>{
            commit('SET_MUSIC_LIST',music)
        })
    },
    setKeyword({commit},keyword) {
        return new Promise(()=>{
            commit('SET_KEYWORD',keyword)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}