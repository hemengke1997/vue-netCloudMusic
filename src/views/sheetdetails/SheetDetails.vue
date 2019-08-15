<template>
  <div id="j-app" class="u-height">
    <div class="root">
      <div class="playlist u-paddlr u-paddbm">
        <div class="top">
          <section class="header">
            <div class="ignore_plhead_bg"></div>
            <div class="plhead_wrap">
              <div class="ignore_plhead_left">
                <img v-lazy="playlist.coverImgUrl"/>
                <div class="plhead_top">
                  <i class="iconfont icon-erji"></i>
                  <span class="count">{{playCount}}万</span>
                </div>
                <span class="sheet_en"><span v-if="playlist.highQuality">精品</span>歌单</span>
              </div>
              <div class="plhead_right">
                <h2 class="title">音乐强心剂</h2>
                <div class="auth">
                  <div class="auth_wrap">
                    <div class="ignore_auth_header">
                      <img src="../../assets/img/logo.png" alt />
                      <span class="daren-icon"></span>
                    </div>
                    -情商雨夜-
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="pllist_intro">
            <div class="tags ignore_tag_bottom">
              标签：
              <span class="tag">华语</span>
              <span class="tag">治愈</span>
            </div>
            <div class="u_intro">
              <div class="intro_3">
                <span>
                  <i>简介：我们怀着美好的希望</i>
                  <br />
                </span>
                <span>
                  <i>我们怀着美好的希望</i>
                  <br />
                </span>
                <span>
                  <i>我们怀着美好的希望</i>
                  <br />
                </span>
                <span>
                  <i>我们怀着美好的希望</i>
                  <br />
                </span>
                <span>
                  <i>我们怀着美好的希望</i>
                  <br />
                </span>
              </div>
              <i class="iconfont icon-pull_down"></i>
            </div>
          </section>
        </div>
        <div class="music">
          <h3 class="list_title">歌曲列表</h3>
          <music-list></music-list>
        </div>
        <div class="comment"></div>
        <div class="fixed_footer"></div>
        <div class="footer_bn"></div>
      </div>
    </div>
  </div>
</template>

<script>
import MusicList from "@/components/Musiclist";
import {getSheetDetails} from '@/api/recommend-api'
import {OK} from 'js/config'
export default {
  data() {
    return {
      playlist: {
        playCount: 0
      },
    };
  },
  components: {
    MusicList
  },
  computed: {
    id() {
      return this.$route.query.id
    },
    songs() {

    },
    playCount() {
      return Math.floor(this.playlist.playCount/10000)
    }
  },
  methods: {
    _getSheetDetails(id) {
      getSheetDetails(id).then(res=>{
        if(res.status === OK) {
          console.log(res.data.playlist)
          this.playlist = res.data.playlist
        }
      })
    }
  },
  created() {
    this._getSheetDetails(this.id)
  },
  mounted() {
    
  }
};
</script>

<style lang="less" scoped>
#j-app {
  padding-bottom: env(safe-area-inset-bottom);
  box-sizing: border-box;
  .root {
    position: relative;
    background-color: #fcfcfd;
    height: 100%;
    .playlist {
      background-color: #f8f8f8;
      min-height: 100%;
      .top {
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
              &::after {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 18px;
                z-index: 2;
                background-image: linear-gradient(90deg,transparent,rgba(0,0,0,.2));
              }
              @media screen and (min-width: 360px) {
                width: 126px;
                height: 126px;
              }
              @media screen and (min-width: 414px) {
                width: 145px;
                height: 145px;
              }
              img {
                width: 100%;
                vertical-align: middle;
              }
              .plhead_top {
                position: absolute;
                right: 2px;
                top: 0;
                z-index: 3;
                padding-left: 15px;
                color: #fff;
                text-shadow: 1px 0 0 rgba(0,0,0,.15);
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
                background-color: rgba(217,48,48,.8);
                border-top-right-radius: 17px;
                border-bottom-right-radius: 17px;
              }
            }
            .plhead_right {
              flex: auto;
              width: 1%;
              margin-left: 16px;
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
                  }
                }
              }
            }
          }
        }
        .pllist_intro {
          position: relative;
          margin: 0 10px 0 15px;
          padding-top: 10px;
          line-height: 19px;
          color: #666;
          .tags {
            margin-bottom: 10px;
            margin-right: -10px;
            line-height: 20px;
            font-size: 14px;
            .tag {
                display: inline-block;
                margin-right: 10px;
                padding: 1px 8px;
                font-size: 12px;
                position: relative;
                &::after {
                    .small_border;   
                }
            }
            .ignore_tag_bottom {
              &::after {
                border-width: 1px;
                border-radius: 80px;
              }
            }
          }
          .u_intro {
              padding-bottom: 18px;
              position: relative;
              color: #666;
              line-height: 19px; 
              .intro_3 {
                  .text_2;
                  -webkit-line-clamp: 3;
                  .break_2;
                  i {
                      font-style: normal;
                      font-size: 14px;
                  }
              }
              .icon-pull_down {
                  float: right;
              }
          }
        }
      }
      .music {
        .list_title {
          height: 23px;
          line-height: 23px;
          padding: 0 10px;
          font-size: 12px;
          color: #666;
          background-color: #eeeff0;
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