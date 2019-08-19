const getters = {
    musicList: state => state.musicList,    // 歌曲（推荐歌曲，热门歌曲，歌单歌曲）
    comments: state => state.comments,
    commentLength: state => state.commentLength,  // 热门评论的条数
    user: state => state.user,  // 用户详情
    playlist: state => state.playlist,  // 用户歌单详情
}

export default getters