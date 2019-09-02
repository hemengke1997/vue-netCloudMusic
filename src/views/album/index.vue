<template>
  <div>
    <PAhead :type="2"></PAhead>
    <detail-des v-if="tempAlbum.description" :type="2"></detail-des>
    <music-list :highlight="false">
      <h3 class="list_title">歌曲列表</h3>
    </music-list>
    <div class="album_comment">
      <h3 class="list_title" v-if="hotComments.length">精彩评论</h3>
      <comment :type="1" :commentOBJ="commentOBJ"></comment>
      <h3 class="list_title" v-if="hotComments.length < 15 && comments.length">最新评论({{commentOBJ.total}})</h3>
      <comment :type="2" :commentOBJ="commentOBJ"></comment>
    </div>
    <collect-sheet :text="text"></collect-sheet>
    <loading v-if="isLoading"></loading>
  </div>
</template>

<script>
import PAhead from "@/components/playlist&album/PAhead";
import MusicList from "@/components/Musiclist";
import DetailDes from "@/components/playlist&album/DetailDes";
import Loading from "public/Loading";
import CollectSheet from "public/CollectSheet";
import Comment from "@/components/comment/Comment";
import { getAlbumDetails } from "@/api/search-api";
import { getAlbumComments } from "@/api/comment-api";
import { OK } from "js/config";
import { Promise } from "q";

export default {
  data() {
    return {
      tempSongs: [],
      musicA: {
        song: [],
        rank: true,
        SQ: false,
        red: false
      },
      isLoading: true,
      tempAlbum: {
        description: " "
      },
      text: "收藏歌单",
      commentOBJ: {}, // 总的comment对象
      comments: [], //  最新评论
      hotComments: [] // 热门评论
    };
  },
  components: {
    PAhead,
    Loading,
    DetailDes,
    MusicList,
    CollectSheet,
    Comment
  },
  computed: {
    // 转换歌曲列表格式
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
          }
        };
      });
    },
    album() {
      return {
        blurPicUrl: this.tempAlbum.blurPicUrl,
        coverImgUrl: this.tempAlbum.picUrl,
        name: this.tempAlbum.name,
        artists: this.tempAlbum.artists,
        publishTime: this.tempAlbum.publishTime,
        description: this.tempAlbum.description
      };
    },
    id() {
      return this.$route.query.id;
    }
  },
  methods: {
    _getAlbumDetails(id) {
      getAlbumDetails(id).then(res => {
        if (res.status === OK) {
          this.tempSongs = res.data.songs;
          this.tempAlbum = res.data.album;
          this.musicA.song = this.songs;
          const p1 = this.$store.dispatch("playlist/setMusicList", this.musicA);
          const p2 = this.$store.dispatch("playlist/setAlbum", this.album);
          Promise.all([p1, p2, this._getAlbumComments(this.id)]).then(() => {
            this.isLoading = false;
          });
        }
      });
    },
    _getAlbumComments(id) {
      return new Promise(resolve => {
        getAlbumComments(id).then(res => {
          if (res.status === OK) {
            this.commentOBJ = res.data;
            this.comments = res.data.comments;
            this.hotComments = res.data.hotComments;
          }
          resolve();
        });
      });
    }
  },
  created() {
    this._getAlbumDetails(this.id);
  }
};
</script>

<style lang="less" scoped>
.list_title {
  .listTitle;
  background-color: #eeeff0;
}
</style>