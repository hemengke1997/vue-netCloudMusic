const state = {
    comments: [],
    hotCommentLength: 0,
    newCommentLength: 0
}

const mutations = {
    SET_COMMENT: (state,comments) => {
        state.comments = comments
    },
    SET_HOTCOMMENT_LENGTH: (state,length) => {
        state.hotCommentLength = length
    },
    SET_NEWCOMMENT_LENGTH: (state,length) => {
        state.newCommentLength = length
    }
}

const actions = {
    setComments({commit},comments) {
        return new Promise(()=>{
            commit('SET_COMMENT',comments)
        })
    },
    setHotcommentLength({commit},length) {
        return new Promise(()=>{
            commit('SET_HOTCOMMENT_LENGTH',length)
        })
    },
    setNewcommentLength({commit},length) {
        return new Promise(()=>{
            commit('SET_NEWCOMMENT_LENGTH',length)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}