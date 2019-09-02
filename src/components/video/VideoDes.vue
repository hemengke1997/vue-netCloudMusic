<template>
  <section class="videodes">
    <h4 class="video_title">
      <p class="name">
        <i class="ignore_icon_mv">MV</i>
        <span>{{des.name}}</span>
        <i class="iconfont icon-sanjiaoxing"></i>
      </p>
    </h4>
    <span class="singer">
      歌手：<span v-for="(item,index) in singers" :key="index" @click="gotoSinger(item.id)" class="asing">{{item.name}}</span>
    </span>
    <p class="info">
      <span class="publishtime">发布时间：{{publishTime(des.publishTime)}}</span>
      <span class="played">播放：{{playCount}}</span>
    </p>
  </section>
</template>

<script>
import transDate from '@/utils/transDate'
export default {
  data() {
    return {

    }
  },
  props: {
    des: {
      type:Object,
      required:true
    }
  },
  computed: {
    singers() {
      let artists = this.des.artists
      if(!artists) {
        return ""
      }
      return artists
    },
    publishTime() {
      return (time)=>{
        const date = transDate(time)
        console.log(time)
        return `${date.year}-${date.month}-${date.day}`
      }
    },
    playCount() {
      if(this.des.playCount > 10000) {
        return Math.floor(this.des.playCount/10000) + '万'
      }
      return this.des.playCount
    }
  }
};
</script>

<style lang="less" scoped>
.videodes {
  padding: 15px 10px 12px;
  .video_title {
    line-height: 20px;
    .name {
      padding-right: 35px;
      position: relative;
      color: #333;
      font-size: 17px;
      line-height: 25px;
      .ignore_icon_mv {
        .ismv;
        width: 24px;
        height: 13px;
        margin-right: 9px;
        margin-top: -2px;
        vertical-align: middle;
        &::after {
          .small_border;
          border-color: #d33a31;
          border-width: 1px;
          @media screen and (-webkit-min-device-pixel-ratio: 3) {
            border-width: 2px;
          }
        }
      }
      .icon-sanjiaoxing {
        font-size: 12px;
        position: absolute;
        top: 1px;
        right: 8px;
      }
    }
  }
  .singer {
    display: inline-block;
    margin: 11px 0 10px;
    .highlight;
    font-size: 13px;
    line-height: 14px;
    .asing {
      margin: 0 6px;  
    }
    :first-child {
        margin: 0;
    }
  }
  .info {
    margin-top: 5px;
    font-size: 13px;
    color: #999;
    .publishtime {
      height: 14px;
      padding-right: 18px;
      position: relative;
      &::after {
        .small_border;
        border-right-width: 1px;
        @media screen and (-webkit-min-device-pixel-ratio: 3){
          border-right-width: 2px;
        } 
      }
    }
    .played {
      margin-left: 18px;
    }
  }
}
</style>