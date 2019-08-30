const state = {
    userId: 0,
}

const mutations = {
    SET_USERID: (state,userId) => {
        state.userId = userId
    },
}

const actions = {
    setUserId({commit},userId) {
        return new Promise(()=>{
            commit('SET_USERID',userId)
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}