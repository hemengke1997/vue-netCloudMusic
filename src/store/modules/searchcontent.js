const state = {
    keyword: '',        // 搜索关键字
    hasAlbum: true,
    searchLoading: false
}

const mutations = {
    SET_KEYWORD:(state,keyword) => {
        state.keyword = keyword
    },
    HAS_ALBUM_OR_NOT: (state,hasAlbum) => {
        state.hasAlbum = hasAlbum
    },
    SET_SEARCH_LOADING: (state,isLoading) => {
        state.isLoading = isLoading
    }
}

const actions = {
    setKeyword({commit},keyword) {
        return new Promise((resolve,reject)=>{
            commit('SET_KEYWORD',keyword)
            resolve()
        })
    },
    hasAlbumOrNot({commit},hasAlbum) {
        return new Promise(()=>{
            commit('HAS_ALBUM_OR_NOT',hasAlbum)
        })
    },
    setSearchLoading({commit},isLoading) {
        return new Promise(()=>{
            commit('SET_SEARCH_LOADING',isLoading)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}