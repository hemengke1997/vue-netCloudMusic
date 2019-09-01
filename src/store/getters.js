const getters = {
    musicList: state => state.playlist.musicList,    // 歌曲（推荐歌曲，热门歌曲，歌单歌曲）
    album: state => state.playlist.album,      // 专辑页面头部所需数据
    playlist: state => state.playlist.playlist,  // 用户歌单详情
    flag: state => state.playlist.flag,         // 在sheetDetails这个父组件中分发了action之后
    // 把flag置为true flag为true时，子组件才能拿到playlist

    comments: state => state.comment.comments,
    hotCommentLength: state => state.comment.hotCommentLength,  // 热门评论的条数
    newCommentLength: state => state.comment.newCommentLength,  // 最新评论的条数

    // 用户主页 
    userId: state => state.user.userId, // 用户id

    //  搜索
    hasAlbum: state => state.searchcontent.hasAlbum,
    hasMV: state => state.searchcontent.hasMV,
    keyword: state => state.searchcontent.keyword, 
    hotSongs: state => state.searchcontent.hotSongs, // 歌手的热门单曲
}

export default getters