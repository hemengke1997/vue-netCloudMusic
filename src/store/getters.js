const getters = {
    musicList: state => state.playlist.musicList,    // 歌曲（推荐歌曲，热门歌曲，歌单歌曲）
    comments: state => state.comment.comments,

    hotCommentLength: state => state.comment.hotCommentLength,  // 热门评论的条数

    newCommentLength: state => state.comment.newCommentLength,  // 最新评论的条数

    playlist: state => state.playlist.playlist,  // 用户歌单详情

    // 用户主页 
    userId: state => state.user.userId, // 用户id

    //  搜索
    hasAlbum: state => state.searchcontent.hasAlbum,
    hasMV: state => state.searchcontent.hasMV,
    keyword: state => state.searchcontent.keyword,

    searchLoading: state => state.searchcontent.searchLoading,
}

export default getters