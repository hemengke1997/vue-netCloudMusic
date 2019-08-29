const state = {
    keyword: '',        // 搜索关键字
}

const mutations = {
    SET_KEYWORD:(state,keyword) => {
        state.keyword = keyword
    }
}

const actions = {
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