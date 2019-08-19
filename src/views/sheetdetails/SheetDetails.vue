<template>
  <div class="u-height">
    <div class="loading_box" v-if="isLoading">
      <img src="../../assets/img/loading.gif" />
    </div>
    <div class="root" v-show="!isLoading">
      <div class="playlist u-paddlr u-paddbm">
        <div class="top">
          <section class="header">
            <div
              class="ignore_plhead_bg"
              :style="{backgroundImage:'url('+ playlist.coverImgUrl +')'}"
            ></div>
            <div class="plhead_wrap">
              <div class="ignore_plhead_left">
                <img :src="playlist.coverImgUrl" />
                <div class="plhead_top">
                  <i class="iconfont icon-erji"></i>
                  <span class="count">{{playCount}}万</span>
                </div>
                <span class="sheet_en">
                  <span v-if="playlist.highQuality">精品</span>歌单
                </span>
              </div>
              <div class="plhead_right">
                <h2 class="title">{{playlist.name}}</h2>
                <div class="auth">
                  <div class="auth_wrap">
                    <div class="ignore_auth_header">
                      <img :src="playlist.creator.avatarUrl" alt />
                      <span class="ignore_creator_icon" v-if="playlist.creator.vipType"></span>
                    </div>
                    {{playlist.creator.nickname}}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="pllist_intro" v-if="playlist.description||tagslength">
            <div class="tags" v-if="tagslength">
              标签：
              <span
                class="tag ignore_tag_bottom"
                v-for="(item,index) in playlist.tags"
                :key="index"
              >{{item}}</span>
            </div>
            <div class="u_intro" @touchend="showDes" v-if="playlist.description">
              <div class="intro_3" :class="{three_line:overthree}" ref="intro">
                <span>
                  <i>简介：{{description_first}}</i>
                  <br />
                </span>
                <span v-for="(item,index) in description_last" :key="index">
                  <i>{{item}}</i>
                  <br />
                </span>
              </div>
              <i class="iconfont icon-pull_down" v-if="arrow" :class="{arrow:!overthree}"></i>
            </div>
          </section>
        </div>
    
          <div class="music">
            <h3 class="list_title">歌曲列表</h3>
            <music-list></music-list>
          </div>
          <div class="sheet_comment">
            <h3 class="hot_comment">精彩评论</h3>
            <comment :type="1" :id="id"></comment>
            <h3 class="new_comment" v-if="commentLength<15">最新评论</h3>
            <comment :type="2" :id="id"></comment>
          </div>
          <collect-sheet></collect-sheet>
          <div class="footer_bn"></div>
        
      </div>

      <div class="bottom"></div>
    </div>
  </div>
</template>

<script>
import MusicList from "@/components/Musiclist";
import CollectSheet from "@/components/CollectSheet";
import { getSheetDetails } from "@/api/recommend-api";
import { OK } from "js/config";
import { mapActions, mapGetters } from "vuex";
import Comment from "@/components/Comment";

export default {
  data() {
    return {
      lineheight: 19, // 写死在样式里面的
      init: true,
      overthree: false,
      arrow: false,
      playlist: {
        playCount: 0,
        coverImgUrl: "",
        creator: {
          avatarUrl: "",
          vipType: 0
        },
        tags: []
      },
      tempSongs: [],
      musicS: {
        song: [],
        red: false,
        SQ: false,
        rank: true
      },
      isLoading: true,
    };
  },
  components: {
    MusicList,
    CollectSheet,
    Comment
  },
  computed: {
    id() {
      return this.$route.query.id;
    },
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
          },
          copyright: item.copyright
        };
      });
    },
    playCount() {
      return Math.floor(this.playlist.playCount / 10000);
    },
    description_first() {
      if (this.description) {
        return this.description[0];
      }
      return "";
    },
    description_last() {
      if (this.description) {
        return this.description.slice(1);
      }
      return "";
    },
    description() {
      if (this.playlist.description) {
        return this.playlist.description.split(/\n/);
      }
      return "";
    },
    isOverThree() {
      if(this.playlist.description) {
        return this.$refs.intro.offsetHeight / this.lineheight > 4;
      } else {
        return null
      }
    },
    tagslength() {
      return this.playlist.tags.length
    },
    // comments(){
    //   return this.$store.getters.comments && this.$store.getters.comments.hotComments && this.$store.getters.comments.hotComments.length > 15
    // }
    ...mapGetters({
      commentLength: 'commentLength'
    })
  },
  methods: {
    _getSheetDetails(id) {
      getSheetDetails(id).then(res => {
        if (res.status === OK) {
          // console.log(res.data.playlist);
          this.playlist = res.data.playlist;
          this.tempSongs = res.data.playlist.tracks;
          this.musicS.song = this.songs;
          this.setMusicList(this.musicS).then((this.isLoading = false));
        }
      });
    },
    showDes() {
      if (this.isOverThree) {
        this.overthree = !this.overthree;
      }
    },
    ...mapActions(["setMusicList"])
  },
  created() {
    this._getSheetDetails(this.id);
  },
  beforeRouteUpdate(to, from, next) {
    this._getSheetDetails(to.query.id);
    next();
  },
  updated() {
    if (this.init) {
      this.init = false;
      this.$nextTick(() => {
        this.arrow = this.overthree = this.isOverThree;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.u-height {
  .safe;
  .loading_box {
    .after;
    img {
      .loading_img;
    }
  }
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
            .three_line {
              .text_2;
              -webkit-line-clamp: 3;
            }
            .intro_3 {
              .break_2;
              i {
                font-style: normal;
                font-size: 14px;
              }
            }
            .icon-pull_down {
              float: right;
            }
            .arrow {
              transform: rotate(-180deg);
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
      .sheet_comment {
        .hot_comment,
        .new_comment {
          background-color: rgba(0, 0, 0, 0.05);
          padding: 0 10px;
          height: 23px;
          line-height: 23px;
          margin: 0;
          color: #666;
          font-size: 12px;
          font-weight: 400;
        }
      }
      .footer_bn {
        height: 56px;
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