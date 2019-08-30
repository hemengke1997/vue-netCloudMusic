const state = {
    keyword: '',        // 搜索关键字
    hasAlbum: true,
    hasMV: true,
    searchLoading: false
}

const mutations = {
    SET_KEYWORD:(state,keyword) => {
        state.keyword = keyword
    },
    HAS_ALBUM_OR_NOT: (state,hasAlbum) => {
        state.hasAlbum = hasAlbum
    },
    HAS_MV_OR_NOT: (state,hasMV) => {
        state.hasMV = hasMV
    },
    SET_SEARCH_LOADING: (state,isLoading) => {
        state.isLoading = isLoading
    }
}

const actions = {
    setKeyword({commit},keyword) {
        return new Promise((resolve)=>{
            commit('SET_KEYWORD',keyword)
            resolve()
        })
    },
    hasAlbumOrNot({commit},hasAlbum) {
        return new Promise(()=>{
            commit('HAS_ALBUM_OR_NOT',hasAlbum)
        })
    },
    hasMVOrNot({commit},hasMV) {
        return new Promise(()=>{
            commit('HAS_MV_OR_NOT',hasMV)
        })
    },
    setSearchLoading({commit},isLoading) {
        return new Promise((resolve)=>{
            commit('SET_SEARCH_LOADING',isLoading)
            resolve()
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}