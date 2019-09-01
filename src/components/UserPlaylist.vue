<template>
  <div class="user_playlist">
    <h3 class="title" v-cloak>歌单({{ownPlaylist.length}})</h3>
    <ul class="playlist">
        <li class="song" v-for="(item,index) in ownPlaylist" :key="index" @click="gotoPlaylist(item.id)">
            <div class="ignore_left">
                <img v-lazy="item.coverImgUrl">
                <div class="love" v-if="index===0">
                    <i class="iconfont icon-iconfontlove"></i>
                </div>
            </div>
            <div class="right">
              <h3 class="playlist_title">{{item.name}}</h3>
              <div class="bottom" v-cloak>{{item.trackCount}}首，播放{{item.playCount}}次</div>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
import { getUserPlaylist } from "@/api/comment-api"
import {OK} from 'js/config'
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      playlist: []
    }
  },
  computed: {
    uid() {
      return this.$route.query.uid;
    },
    ownPlaylist() {
      return this.playlist.filter(item=>{
        return item.creator.userId === this.userId
      })
    },
    ...mapGetters({
      userId: 'userId'
    })
  },
  methods: {
    _getUserPlaylist(id){
      getUserPlaylist(id).then(res=>{
        if(res.status === OK) {
          // console.log(res.data)
          this.playlist = res.data.playlist
        }
      })
    },
    gotoPlaylist(id) {
      this.$router.push({
        path: '/playlist/detail',
        query: {id:id}
      })
    }
  },
  created() {
    this._getUserPlaylist(this.uid)
  }
};
</script>

<style lang="less" scoped>
[v-cloak] {
  display: none;
}
.user_playlist {
  .title {
    background-color: #eeeff0;
    font-size: 12px;
    height: 28px;
    padding-left: 10px;
    color: #666;
    line-height: 28px;
  }
  .playlist {
      .song {
        display: flex;
        position: relative;
        padding-left: 6px;
        .ignore_left {
            width: 50px;
            height: 50px;
            margin-right: 10px;
            position:relative;
            top: 3px;
            img {
                width: 100%;
                vertical-align: middle;
            }
            .love {
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                background-color: rgba(0,0,0,.4);
                .icon-iconfontlove {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    color: #fff;
                    font-size: 30px;
                }
            }
        }
        .right {
          flex: auto;
          padding: 3px 10px 3px 0;
          height: 50px;
          overflow: hidden;
          position: relative;
          &::after {
            .small_border;
            border-bottom-width: 1px;
          }
          .playlist_title {
            font-size: 17px;
            color: #333;
            height: 20px;
            line-height: 20px;
            margin-top: 6px;
            .text_overflow;
          }
          .bottom {
            margin-top: 5px;
            height: 14px;
            line-height: 14px;
            font-size: 12px;
            color: #999;
          }
        }
      }
  }
}
</style>