const state = {
    keyword: '',        // 搜索关键字
    hasAlbum: true,     // 是否包含专辑
    hasMV: true,        // 是否包含MV
    hotSongs:{},       // 歌手的热门单曲
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
    SET_HOT_SONGS: (state, hotSongs) => {
        state.hotSongs = hotSongs
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
    setHotSongs({commit},hotSongs) {
        return new Promise(()=>{
            commit('SET_HOT_SONGS',hotSongs)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}