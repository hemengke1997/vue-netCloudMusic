const state = {
    userId: 0,
    avatarUrl: '',
    followeds: 0,
    nickname: '',
    backgroundUrl: '',
    listencount: 0
}

const mutations = {
    SET_USERID: (state,userId) => {
        state.userId = userId
    },
    SET_AVATARURL:(state,avatarUrl) => {
        state.avatarUrl = avatarUrl
    },
    SET_FOLLOWEDS:(state,followeds) => {
        state.followeds = followeds
    },
    SET_NICKNAME: (state,nickname)=> {
        state.nickname = nickname
    },
    SET_BACKGROUNDURL: (state,backgroundUrl)=>{
        state.backgroundUrl = backgroundUrl
    },
    SET_LISTENCOUNT: (state, listencount) => {
        state.listencount = listencount
    }
}

const actions = {
    setUserId({commit},userId) {
        return new Promise(()=>{
            commit('SET_USERID',userId)
        })
    },
    setAvatarUrl({commit},avatarUrl) {
        return new Promise(()=>{
            commit('SET_AVATARURL',avatarUrl)
        })
    },
    setFolloweds({commit},followeds) {
        return new Promise(()=>{
            commit('SET_FOLLOWEDS',followeds)
        })
    },
    setNickname({commit},nickname) {
        return new Promise(()=>{
            commit('SET_NICKNAME',nickname)
        })
    },
    setBackgroundUrl({commit},backgroundUrl) {
        return new Promise(()=>{
            commit('SET_BACKGROUNDURL',backgroundUrl)
        })
    },
    setListencount({commit},listencount) {
        return new Promise(()=>{
            commit('SET_LISTENCOUNT',listencount)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}