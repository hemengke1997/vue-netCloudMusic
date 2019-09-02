<template>
  <div class="u-height">
    <loading v-if="isLoading"></loading>
    <div class="root">
      <div class="playlist u-paddlr u-paddbm">
        <PAhead :type="1"></PAhead>

        <detail-des v-if="playlist.description || playlist.tags.length" :type="1"></detail-des>

        <music-list class="music">
          <h3 class="list_title">歌曲列表</h3>
        </music-list>
        <div class="sheet_comment">
          <template v-if="hotComments.length">
            <h3 class="hot_comment">精彩评论</h3>
            <comment :type="1" :commentOBJ="commentOBJ"></comment>
          </template>
          <template v-if="hotComments.length < 15 && comments.length">
            <h3 class="new_comment">最新评论({{commentOBJ.total}})</h3>
            <comment :type="2" :commentOBJ="commentOBJ"></comment>
          </template>
        </div>
        <collect-sheet :text="text"></collect-sheet>
      </div>
    </div>
  </div>
</template>

<script>
import MusicList from "@/components/Musiclist";
import CollectSheet from "public/CollectSheet";
import PAhead from "@/components/playlist&album/PAhead";
import DetailDes from "@/components/playlist&album/DetailDes";
import { getSheetDetails } from "@/api/recommend-api";
import { getComments } from "@/api/comment-api";
import { OK } from "js/config";
import Comment from "@/components/comment/Comment";
import Loading from "public/Loading";
import { Promise } from "q";

export default {
  name: "SheetDetails",
  data() {
    return {
      playlist: {
        description: " ", // 这里给了初始值的，不然的话子组件的updated钩子函数不会执行，不知道为什么
        tags: []
      },
      tempSongs: [],
      musicS: {
        song: [],
        red: false,
        SQ: false,
        rank: true
      },
      isLoading: true,
      text: "收藏歌单",
      comments: [], // 最新评论
      hotComments: [], // 热门评论
      commentOBJ: {} // 评论的总对象
    };
  },
  components: {
    MusicList,
    CollectSheet,
    Comment,
    DetailDes,
    Loading,
    PAhead
  },
  computed: {
    id() {
      return this.$route.query.id;
    },
    songs() {
      return this.tempSongs.map(item => {
        return {
          id: item.id,
          name: item.name,
          alias: item.alia,
          ar: item.ar,
          al: {
            name: item.al.name,
            id: item.al.id
          },
          copyright: item.copyright
        };
      });
    },
    des() {
      return {
        coverImgUrl: this.playlist.coverImgUrl,
        playCount: this.playlist.playCount,
        highQuality: this.playlist.highQuality,
        name: this.playlist.name,
        creator: {
          userId: this.playlist.creator.userId,
          vipType: this.playlist.creator.vipType,
          nickname: this.playlist.creator.nickname,
          avatarUrl: this.playlist.creator.avatarUrl
        },
        tags: this.playlist.tags,
        description: this.playlist.description
      };
    }
  },
  methods: {
    _getSheetDetails(id) {
      getSheetDetails(id).then(res => {
        if (res.status === OK) {
          this.playlist = res.data.playlist;
          // console.log(this.playlist)
          this.tempSongs = res.data.playlist.tracks;
          this.musicS.song = this.songs;
          const p1 = this.$store.dispatch("playlist/setMusicList", this.musicS);
          const p2 = this.$store.dispatch(
            "playlist/setPlaylist",
            this.playlist
          );
          Promise.all([p1, p2, this._getComments(this.id)]).then(() => {
            this.isLoading = false;
          });
        }
      });
    },
    _getComments(id) {
      return new Promise(resolve => {
        getComments(id).then(res => {
          if (res.status === OK) {
            this.commentOBJ = res.data;
            this.comments = res.data.comments;
            this.hotComments = res.data.hotComments;
            resolve();
          }
        });
      });
    }
  },
  created() {
    this._getSheetDetails(this.id);
  },
  beforeRouteUpdate(to, from, next) {
    this._getSheetDetails(to.query.id);
    next();
  }
};
</script>

<style lang="less" scoped>
[v-cloak] {
  display: none;
}
.u-height {
  height: 100%;
  .safe;
  .root {
    position: relative;
    background-color: #fcfcfd;
    height: 100%;
    .playlist {
      background-color: #f8f8f8;
      min-height: 100%;
      .music {
        .list_title {
          .listTitle;
        }
      }
      .sheet_comment {
        .hot_comment,
        .new_comment {
          background-color: rgba(0, 0, 0, 0.05);
          padding: 0 10px;
          height: 23px;
          line-height: 23px;
          margin: 0;
          color: #666;
          font-size: 12px;
          font-weight: 400;
        }
      }
    }
    .u-paddlr {
      padding-left: env(safe-area-inset-left);
      padding-right: env(safe-area-inset-right);
    }
    .u-paddbm {
      padding-bottom: env(safe-area-inset-bottom);
    }
  }
}
</style>