const getters = {
    musicList: state => state.playlist.musicList,    // 歌曲（推荐歌曲，热门歌曲，歌单歌曲）
    comments: state => state.comment.comments,

    hotCommentLength: state => state.comment.hotCommentLength,  // 热门评论的条数

    newCommentLength: state => state.comment.newCommentLength,  // 最新评论的条数

    playlist: state => state.playlist.playlist,  // 用户歌单详情

    // 用户主页 
    // avatarUrl: state => state.user.avatarUrl,   // 用户头像
    // followeds: state => state.user.followeds,  // 用户粉丝数
    // nickname: state => state.user.nickname, // 用户名
    // backgroundUrl: state => state.user.backgroundUrl,   // 用户背景图
    // listencount: state => state.user.listencount,   // 用户听歌数
    userId: state => state.user.userId, // 用户id

    //  搜索
    searchSongs: state => state.searchcontent.musicList,
    keyword: state => state.searchcontent.keyword

}

export default getters