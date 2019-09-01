<template>
  <div class="recommend">
    <div class="songsheet">
      <h2 class="title">推荐歌单</h2>
      <ul class="sheet_ul">
        <li class="sheet_li" v-for="item in sheetList" :key="item.id" @click="selectList(item.id)">
          <div class="cover">
            <img v-lazy="item.picUrl" />
            <div class="play_count">
              <i class="iconfont icon-erji"></i>
              <span>{{Math.floor(item.playCount / 10000) }}万</span>
            </div>
          </div>
          <p class="desc">{{item.name}}</p>
        </li>
      </ul>
    </div>
    <div class="new_song">
      <h2 class="title">推荐歌曲</h2>
      <div class="loading" v-if="isLoading">
        <div class="loading_img"></div>
      </div>
      <music-list></music-list>
    </div>
    <recommend-footer></recommend-footer>
  </div>
</template>

<script>
import { getSheetList, getNewSong } from "@/api/recommend-api";
import { OK } from "@/assets/js/config";
import RecommendFooter from "public/Footer.vue"
import MusicList from '@/components/Musiclist.vue'


export default {
  data() {
    return {
      sheetList: [], // 推荐歌单
      isLoading: true,
      tempSongs: [],
      musicD: {
        song: [],
        red: false,
        SQ: true,
        rank: false
      }
    };
  },
  components: {
    RecommendFooter,
    MusicList
  },
  created() {
    this._getSheetList();
    this._getNewSong();
  },
  computed:{
    songs() {
      return this.tempSongs.map(item => {
        return {
          id: item.id,
          name: item.name,
          alias: item.song.alias,
          ar: item.song.artists,
          al:{
            name: item.song.album.name
          },
          copyright: item.song.copyright,
          
        }
      });
    }
  },
  methods: {
    selectList(id) {
      this.$router.push({
        path: 'playlist/detail',
        query: {id:id}
      })
    },
    _getSheetList() {
      getSheetList().then(res => {
        if (res.status === OK) {
          this.sheetList = res.data.result.splice(0, 6);
        } else {
          console.log("获取推荐歌单失败");
        }
      });
    },
    _getNewSong() {
      getNewSong().then(res => {
        if(res.status === OK) {
          this.isLoading = false
          this.tempSongs = res.data.result
          this.musicD.song = this.songs
          this.$store.dispatch('playlist/setMusicList',this.musicD)
        }
      })
    },
  }
};
</script>

<style lang="less" scoped>
.title {
  margin-top: 20px;
  margin-bottom: 14px;
  height: 20px;
  line-height: 20px;
  font-size: 17px;
  padding-left: 9px;
  position: relative;
  &::after {
    .title_after;
  }
}

.songsheet {
  .sheet_ul {
    display: flex;
    flex-wrap: wrap;
    .sheet_li {
      display: block;
      margin-bottom: 16px;
      width: 33.3%;
      padding-left: 1px;
      padding-right: 1px;
      box-sizing: border-box;
      .cover {
        position: relative;
        &::after{
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 20px;
          z-index: 1;
          background: linear-gradient(180deg,rgba(0,0,0,.3),transparent);
        }
        img {
          width: 100%;
        }
        .play_count {
          .listen_count;
          .icon-erji {
            font-size: 12px;
          }
        }
      }
      .desc {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        padding: 6px 2px 0 6px;
        min-height: 30px;
        line-height: 1.2;
        font-size: 13px;
      }
    }
  }
}

.new_song {
  width: 100%;
  margin-top: 30px;
  .loading {
    position: relative;
    min-height: 20px;
    .loading_img {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 100;
      width: 100%;
      height: 100%;
      background: url('../../assets/img/loading.gif') 50% no-repeat;
      background-size: 20px;
    }
  }
}
</style>

