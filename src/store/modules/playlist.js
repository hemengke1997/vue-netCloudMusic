const state = {
    musicList: [], // 歌曲（推荐歌曲，热门歌曲，歌单歌曲）
    playlist: {
        creator: {
            avatarUrl: '',
            vipType: 0,
            nickname: ''
        }
    }, // 用户歌单详情
    album: {}, // 歌手专辑详情

}

const mutations = {
    SET_MUSIC_LIST: (state, musicList) => {
        state.musicList = musicList
    },
    SET_PLAYLIST: (state, playlist) => { 
        state.playlist = playlist
    },
    SET_ALBUM: (state, album) => {
        state.album = album
    }
}

const actions = {
    setMusicList({
        commit
    }, music) {
        return new Promise((resolve) => {
            commit('SET_MUSIC_LIST', music)
            resolve()
        })
    },
    setPlaylist({
        commit
    }, playlist) {
        return new Promise((resolve) => {
            commit('SET_PLAYLIST', playlist)
            resolve()
        })
    },
    setAlbum({
        commit
    }, album) {
        return new Promise((resolve) => {
            commit('SET_ALBUM', album)
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