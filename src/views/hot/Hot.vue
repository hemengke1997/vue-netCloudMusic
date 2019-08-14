<template>
  <div class="hot" v-show="$route.path==='/hot'">
    <div class="hot_top">
      <div class="banner">
        <div class="ignore_hot_icon"></div>
        <div class="hot_time">更新日期：{{updateDate}}</div>
      </div>
    </div>
    <div class="hot_song">
      <ul class="song_ul">
        <li class="song_li" v-for="(item,index) in hotsongs" :key="index">
          <div class="rank" :class="{red: index<3}">{{rank(index+1)}}</div>
          <div class="content">
            <div class="left_part">
              <div class="song_title">
                  <span>{{item.name}}</span>
                  <span v-if="item.alia.length" class="alia">({{item.alia[0]}})</span>
              </div>
              <div class="song_details">
                <i class="iconfont icon-sq"></i>
                {{singers(item.ar)}} - {{item.al.name}}
              </div>
            </div>
            <div class="right_part">
              <i class="iconfont icon-bofang"></i>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="loading_box">
      <div class="loading" v-if="isLoading">
        <img src="../../assets/img/loading.gif" alt="">
      </div>
    </div>
  </div>
</template>


<script>
import {getHotSong} from '@/api/hot-api'
import {OK} from 'js/config'
import transDate from '@/utils/transDate'
export default {
  data() {
    return {
      hotsongs: [],
      songs:[],
      date: {
          month:'',
          day:''
      },
      isLoading: true
    };
  },
  computed:{
      rank() {
          return function(index) {
              return index < 10 ? '0' + index : index
          }
      },
      singers() {
          return function(ar) {
              if(ar.length === 1) {
                  return ar[0].name
              } else {
                  let temp = []
                  ar.forEach(singer => {
                      temp.push(singer.name)
                  });
                  return temp.join(' / ')
              }
          }
      },
      updateDate() {
        return `${this.date.month}月${this.date.day}日`
      }
  },
  created() {
      this._getHotSong()
  },
  methods: {
      _getHotSong() {
          getHotSong().then(res=>{
              if(res.status === OK) {
                const time = transDate(res.data.playlist.updateTime)
                this.date = {month:time.month, day: time.day}
                this.songs = res.data.playlist.tracks
                this.hotsongs = this.songs.slice(0,20)
                this.isLoading = false
              } else {
                  console.log('hotsong-error')
              }
          })
      },
  }
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

  .hot_song {
    .song_ul {
      display: flex;
      flex-direction: column;
      .song_li {
        display: flex;
        .rank {
              width: 40px;
              display: flex;
              justify-content: center;
              align-items: center;
              &.red {
                  color: #df3436;
              }
        }
        .content {
          flex: 1 1 auto;
          display: flex;
          position: relative;
          &::after {
            position: absolute;
            content: "";
            bottom: 0;
            left: 0;
            pointer-events: none;
            box-sizing: border-box;
            width: 100%;
            border: 0 solid rgba(0, 0, 0, 0.1);
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
              .alia {
                  color: #888;
              }
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

  .loading_box {
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    .loading {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      img {
        width: 50%;
      }
    }
  }
}
</style>