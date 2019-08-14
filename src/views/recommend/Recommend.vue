<template>
  <div class="recommend">
    <div class="songsheet">
      <h2 class="title" v-show="flag">推荐歌单</h2>
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
      <h2 class="title" v-show="flag">推荐歌曲</h2>
      <ul class="song_ul">
        <li class="song_li" v-for="item in songs" :key="item.id">
          <div class="content">
            <div class="left_part">
              <div class="song_title">{{item.name}}</div>
              <div class="song_details">
                <i class="iconfont icon-sq"></i>
                {{item.song.artists[0].name}} - {{item.song.album.name}}
              </div>
            </div>
            <div class="right_part">
              <i class="iconfont icon-bofang"></i>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <recommend-footer v-show="flag"></recommend-footer>
  </div>
</template>

<script>
import { getSheetList, getNewSong, getSheetDetails } from "@/api/recommend-api";
import { OK } from "@/assets/js/config";
import RecommendFooter from "public/Footer.vue"

export default {
  data() {
    return {
      sheetList: [], // 推荐歌单
      songs: [],
      flag: false
    };
  },
  components: {
    RecommendFooter
  },
  created() {
    this._getSheetList();
    this._getNewSong()
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
          // console.log(this.sheetList, "sheetlist");
        } else {
          alter("获取推荐歌单失败");
        }
      });
    },
    _getNewSong() {
      getNewSong().then(res => {
        if(res.status === OK) {
          this.songs = res.data.result
          this.flag = true
          // console.log(this.songs)
        }
      })
    }
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
    content: "";
    background-color: #d33a31;
    position: absolute;
    width: 2px;
    height: 16px;
    left: 0;
    top: 1px;
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
          z-index: 33;
          position: absolute;
          right: 3px;
          top: 4px;
          font-size: 12px;
          color: #fff;
          text-shadow: 1px 0 0 rgba(0, 0, 0, 0.15);

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
  .song_ul {
    display: flex;
    flex-direction: column;
    .song_li {
      display: flex;
      .content {
        flex: 1 1 auto;
        display: flex;
        position: relative;
        padding-left: 10px;
        &::after{
          position: absolute;
          content: "";
          bottom: 0;
          left: 0;
          pointer-events: none;
          box-sizing: border-box;
          width: 100%;
          border: 0 solid rgba(0,0,0,.1);
          border-bottom-width: 1px;
          transform: scaleY(0.2);
        }
        .left_part {
          padding: 6px 0;
          flex: 1 1 auto;
          width: 0;
          line-height: 21px;
          .song_title {
            font-size: 17px;
            .text_overflow;
          }
          .song_details {
            font-size: 12px;
            color: #888;
            .text_overflow;
            i {
              font-size: 12px;
              color: #ffa54a;
            }
          }
        }
        .right_part {
          display: flex;
          align-items: center;
          padding: 0 10px;
          i {
            font-size: 26px;
            color: #9f9f9f;
          }
        }
      }
    }
  }
}
</style>

