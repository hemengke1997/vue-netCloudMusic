<template>
  <section class="header">
    <div class="ignore_plhead_bg" :style="{backgroundImage:'url('+ blurPicUrl +')'}"></div>
    <div class="plhead_wrap">
      <div class="ignore_plhead_left" :class="{sheetlist:type===1}">
        <div class="amhed_flbg" v-if="type===2"></div>
        <img :src="detail.coverImgUrl" :lowsrc="detail.blurPicUrl" />
        <div class="plhead_top" v-if="type===1">
          <i class="iconfont icon-erji"></i>
          <span class="count" v-cloak>{{playCount}}</span>
        </div>
        <span class="sheet_en">
          <span v-if="type===1 && detail.highQuality">精品</span>
          {{ptype}}
        </span>
      </div>
      <div class="plhead_right" :class="{rightmore:type===2}">
        <h2 class="title">{{detail.name}}</h2>
        <div class="auth" v-if="type===1">
          <div class="auth_wrap" @click="gotoUser(detail.creator.userId)">
            <div class="ignore_auth_header">
              <img :src="detail.creator.avatarUrl" alt />
              <span class="ignore_creator_icon" v-if="detail.creator.vipType"></span>
            </div>
            {{detail.creator.nickname}}
          </div>
        </div>
        <div class="artists" v-if="type===2">
          <div class="amhed_cnt">
            歌手：
            <span
              class="amhed_singer"
              v-for="(item,index) in singers"
              :key="index"
              @click="gotoSinger(item.id)"
            >{{item.name}}</span>
          </div>
          <div class="amhed_time">
            发行时间：
            <span>{{publishTime(album.publishTime)}}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// 文件说明: 歌单或者专辑的头部
import { mapGetters } from "vuex";
import transDate from "@/utils/transDate";

export default {
  data() {
    return {};
  },
  props: {
    type: {
      type: Number,
      required: true
    }
  },
  computed: {
    playCount() {
      if (this.type === 1 && this.playlist.playCount > 10000) {
        return Math.floor(this.playlist.playCount / 10000) + "万";
      } else {
        return Math.floor(this.playlist.playCount);
      }
    },
    detail() {
      // 1: 用户歌单 2: 歌手专辑
      if (this.type === 1) {
        return this.playlist;
      } else if (this.type === 2) {
        return this.album;
      }
      return '';
    },
    ptype() {
      if (this.type === 1) {
        return "歌单";
      } else if (this.type === 2) {
        return "专辑";
      }
      return '';
    },
    singers() {
      if (!this.album.artists) {
        return "";
      } else if (this.album.artists.length === 1) {
        return [
          {
            name: this.album.artists[0].name,
            id: this.album.artists[0].id
          }
        ];
      } else {
        let temp = [];
        this.album.artists.forEach(item => {
          temp.push({
            name: item.name,
            id: item.id
          });
        });
        return temp;
      }
    },
    publishTime() {
      return function(time) {
        const date = transDate(time);
        return `${date.year}-${date.month}-${date.day}`;
      };
    },
    blurPicUrl() {
      if (this.type === 1) {
        return this.playlist.backgroundCoverUrl || this.playlist.coverImgUrl;
      } else if (this.type === 2) {
        return this.album.blurPicUrl;
      }
      return ''
    },
    ...mapGetters({
      playlist: "playlist",
      album: "album"
    })
  },
  methods: {
    gotoSinger(id) {
      this.$router.push({
        path: "/singer",
        query: { id: id }
      });
    },
    gotoUser(id) {
      this.$router.push({
        path: "/user/playlist",
        query: { uid: id }
      });
    }
  },
  destroyed() {
    this.$store.dispatch("playlist/setPlaylist", {
      creator: {
        avatarUrl: "",
        vipType: 0,
        nickname: ""
      }
    });
  }
};
</script>

<style lang="less" scoped>
.header {
  position: relative;
  padding: 30px 10px 30px 15px;
  overflow: hidden;
  .ignore_plhead_bg {
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(20px);
    transform: scale(1.5);
    background-position: 50%;
    .after;
    &::after {
      content: "";
      background: rgba(0, 0, 0, 0.25);
      .after;
    }
  }
  .plhead_wrap {
    display: flex;
    position: relative;
    z-index: 2;
    .ignore_plhead_left {
      position: relative;
      width: 114px;
      height: 114px;
      background-color: #e2e2e3;
      &.sheetlist::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 18px;
        z-index: 2;
        background-image: linear-gradient(
          90deg,
          transparent,
          rgba(0, 0, 0, 0.2)
        );
      }
      @media screen and (min-width: 360px) {
        width: 126px;
        height: 126px;
      }
      @media screen and (min-width: 414px) {
        width: 145px;
        height: 145px;
      }
      .amhed_flbg {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        height: 114px;
        padding-left: 115%;
        background: url('../../assets/img/album@2x.png') 100% no-repeat;
        background-size: contain;
        @media screen and (min-width: 360px){
          height: 126px;
        }
        @media screen and (min-width: 414px){
          height: 145px;
        }
        @media screen and (min-width: 768px){
          height: 200px;
        }
        @media screen and (-webkit-min-device-pixel-ratio: 3){
          background-image: url('../../assets/img/album@3x.png');
        }
      }
      img {
        width: 100%;
        vertical-align: middle;
        position: relative;
        z-index: 2;
      }
      .plhead_top {
        position: absolute;
        right: 2px;
        top: 0;
        z-index: 3;
        padding-left: 15px;
        color: #fff;
        text-shadow: 1px 0 0 rgba(0, 0, 0, 0.15);
        vertical-align: middle;
        .icon-erji {
          font-size: 14px;
          &::before {
            position: absolute;
            left: -2px;
            top: 2px;
          }
        }
        .count {
          font-size: 12px;
        }
      }
      .sheet_en {
        position: absolute;
        z-index: 3;
        top: 10px;
        left: 0;
        padding: 0 8px;
        height: 17px;
        color: #fff;
        font-size: 9px;
        text-align: center;
        line-height: 17px;
        background-color: rgba(217, 48, 48, 0.8);
        border-top-right-radius: 17px;
        border-bottom-right-radius: 17px;
      }
    }
    .plhead_right {
      flex: auto;
      width: 1%;
      margin-left: 16px;
      &.rightmore {
        margin-left: 29px;
      }
      .title {
        padding-top: 1px;
        font-size: 17px;
        line-height: 1.3;
        color: #fefefe;
        height: 44px;
        display: -webkit-box;
        -webkit-box-pack: center;
        .text_2;
        .break_2;
      }
      .auth {
        position: relative;
        margin-top: 20px;
        .text_overflow;
        .auth_wrap {
          display: inline-block;
          color: hsla(0, 0%, 100%, 0.7);
          font-size: 14px;
          .ignore_auth_header {
            display: inline-block;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            vertical-align: middle;
            margin-right: 5px;
            position: relative;
            img {
              border-radius: 50%;
              width: 100%;
            }
            .ignore_creator_icon {
              position: absolute;
              right: -5px;
              bottom: 0;
              width: 12px;
              height: 12px;
              background-position: 0 0;
              background-repeat: no-repeat;
              background-size: 75px auto;
              background-image: url("../../assets/img/usericn_2x.png");
              @media screen and(-webkit-device-pixel-ratio: 3) {
                background-image: url("../../assets/img/usericn_3x.png");
                background-size: 70px auto;
              }
            }
          }
        }
      }
      .artists {
        font-size: 14px;
        color: hsla(0, 0%, 100%, 0.5);
        .amhed_cnt {
          margin-top: 12px;
          .text_overflow;
          .amhed_singer {
            color: #fff;
          }
        }
        .amhed_time {
          margin-top: 12px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>