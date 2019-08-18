const getters = {
    musicList: state => state.musicList,    // 歌曲（推荐歌曲，热门歌曲，歌单歌曲）
    hotComment: state => state.hotComment,  // 热门评论
    newComment: state => state.newComment,  // 最新评论
     
}

export default getters