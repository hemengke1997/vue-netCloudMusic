<template>
  <div class="user_playlist">
    <h3 class="title">歌单({{}})</h3>
    <ul class="playlist">
        <li class="song">
            <div class="ignore_left">
                <img src="../assets/img/default.jpg" alt="playlist">
                <div class="love">
                    <i class="iconfont icon-iconfontlove"></i>
                </div>
            </div>
            <div class="right">
              <h3 class="playlist_title">贺梦柯喜欢的音乐</h3>
              <div class="bottom">15首，播放2000次</div>
            </div>
        </li>
        <li class="song">
            <div class="ignore_left">
                <img src="../assets/img/default.jpg" alt="playlist">
                <div class="love">
                    <i class="iconfont icon-iconfontlove"></i>
                </div>
            </div>
            <div class="right">
              <h3 class="playlist_title">贺梦柯喜欢的音乐</h3>
              <div class="bottom">15首，播放2000次</div>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import { getUserPlaylist,getUser } from "@/api/comment-api"
import {OK} from 'js/config'
export default {
  data() {
    return {
      
    }
  },
  computed: {
    uid() {
      return this.$route.query.uid;
    },
    ownPlaylist() {
      return this.playlist.filter(item=>{
        item.creator.userId === this.user.profile.userId
      })
    },
    ...mapGetters([
      'user',
      'playlist'
    ])
  },
  methods: {
    _getUserPlaylist(id){
      getUserPlaylist(id).then(res=>{
        if(res.status === OK) {
          this.setUserPlaylist(res.data.playlist)
        }
      })
    },
    _getUser(id) {
      getUser(id).then(res=>{
        if(res.status === OK) {
          this.setUser(res.data)
        }
      })
    },
    ...mapActions([
      'setUser',
      'setUserPlaylist'
    ])
  },
  created() {
    this._getUserPlaylist(this.uid)
    this._getUser(this.uid)
  }
};
</script>

<style lang="less" scoped>
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