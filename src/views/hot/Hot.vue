<template>
  <div class="hot">
    
    <div class="hot_top">
      <div class="banner">
        <div class="ignore_hot_icon"></div>
        <div class="hot_time">更新日期：{{updateDate}}</div>
      </div>
    </div>
    <music-list></music-list>
    <div class="loading_box" v-if="isLoading">
      <img src="../../assets/img/loading.gif" alt />
    </div>
  </div>
</template>


<script>
import { getHotSong } from "@/api/hot-api";
import { OK } from "js/config";
import transDate from "@/utils/transDate";
import MusicList from "@/components/Musiclist.vue";
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      tempSongs: [],  // 20个
      hotsongs: [],  // 全部
      date: {
        month: "",
        day: ""
      },
      isLoading: true,
      musicH: {
        song: [],
        red: true,
        rank: true,
        SQ: true
      }
    };
  },
  components: {
    MusicList
  },
  computed: {
    updateDate() {
      return `${this.date.month}月${this.date.day}日`;
    },
    songs() {
      return this.tempSongs.map(item => {
        return {
          id: item.id,
          name: item.name,
          alias: item.alia,
          ar: item.ar,
          al: {
            id: item.al.id,
            name: item.al.name
          },
          copyright: item.copyright
        };
      });
    }
  },
  methods: {
    _getHotSong() {
      getHotSong().then(res => {
        if (res.status === OK) {
          const time = transDate(res.data.playlist.updateTime);
          this.date = { month: time.month, day: time.day };
          this.hotsongs = res.data.playlist.tracks;
          this.tempSongs = this.hotsongs.slice(0, 20);
          this.musicH.song = this.songs
          this.$store.dispatch('playlist/setMusicList',this.musicH).then(this.isLoading = false)
        } else {
          console.log("hotsong-error");
        }
      });
    },
    ...mapActions([
      'setMusicList'
    ])
  },
  created() {
    this._getHotSong()
  },
};
</script>

<style lang="less" scoped>
.hot {
  overflow: hidden;
  .hot_top {
    background: url("../../assets/img/hot_music_bg_2x.jpg") no-repeat;
    background-size: contain;
    position: relative;
    overflow: hidden;
    padding-top: 38.8%;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.2);
      z-index: 1;
    }
    .banner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 3;
      box-sizing: border-box;
      padding-left: 20px;
      .ignore_hot_icon {
        width: 142px;
        height: 67px;
        background: url("../../assets/img/index_icon_2x.png") no-repeat;
        background-size: 166px 96px;
        background-position: -24px -30px;
      }
      .hot_time {
        margin-top: 10px;
        font-size: 12px;
        transform: scale(0.93);
        color: hsla(0, 0, 100%, 0.8);
        transform-origin: left top;
      }
    }
  }

  .loading_box {
    .after;
    img {
      .loading_img;
    }
  }
}
</style>