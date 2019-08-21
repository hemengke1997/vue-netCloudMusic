<template>
  <div class="u-height">
    <div class="root">
      <div class="song">
        <div class="song_bg"></div>
        <div class="scroll_wrapper">
          <div class="scroll_content"  @touchmove="touchmove($event)" @touchstart="touchstart($event)" @touchend="touchend($event)" :style="{transform:`translateY(${yScroll}px)`}">
            <div>
              <div class="m-song_newfst">
                <div class="top_logo">
                  <i class="iconfont icon-wangyiyunyinle1"></i>
                  <span class="logo_ch">网易云音乐</span>
                </div>
                <div class="m-song-wrap">
                  <div class="ignore_disc">
                    <div class="m-song-turn">
                      <div class="ignore_rollwrap">
                        <div class="song_img">
                          <img src="../../assets/img/logo.png" alt />
                        </div>
                      </div>
                      <div class="song_lgour">
                        <div class="song_light"></div>
                      </div>
                    </div>
                    <span class="ignore_plybtn"></span>
                  </div>
                  <div class="song_clickarea" @click="playsong"></div>
                </div>
                <div class="song_info">
                  <h2 class="song_h2">
                    <span class="song_title">歌曲名</span>
                    <span class="song_gap">-</span>
                    <span class="song_autr">歌手名</span>
                  </h2>
                  <div class="song_lrc">
                    <p class="song_pure song_top" v-if="0">
                      暂无歌词，
                      <span class="helplrc">求歌词</span>
                    </p>
                    <div class="songlrc_scroll" v-if="1">
                      <div class="lrc_inner">
                        <p class="lrc_item">作曲Songwriting：苏紫旭&安志华</p>
                        <p class="lrc_item">编曲Songbook Arrangements：苏紫旭&安志华</p>
                        <p class="lrc_item">吉他Guitar&人声Vocals：苏紫旭</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="link_download">查看完整歌词 ></div>
                <div class="guide">
                  <i class="ignore_arr ani"></i>
                </div>
              </div>
              <div class="m_newcomm">
                <div class="talk_song" v-if="hotComments.length||newComments.length">
                  <div class="m_comments">
                    <div v-if="hotComments.length">
                      <h3 class="cmt_title">精彩评论</h3>
                      <div class="cmt_list">
                        <comment-item
                          v-for="(item,index) in hotComments"
                          :key="index"
                          :item="item"
                          :type="song"
                        ></comment-item>
                      </div>
                    </div>
                    <div v-if="hotComments.length<10">
                      <h3 class="cmt_title">最新评论(19)</h3>
                      <div class="cmt_list">
                        <comment-item
                          v-for="(item,index) in newComments"
                          :key="index"
                          :item="item"
                          :type="song"
                        ></comment-item>
                      </div>
                    </div>
                  </div>
                  <div class="cmt_more">
                    <span class="box" @click="download">打开云音乐查看更多精彩评论</span>
                  </div>
                </div>
                <div v-if="!hotComments.length&&!newComments.length">
                  <h3 class="cmt_title">最新评论</h3>
                  <div class="song_cmemp">
                    <p class="song_nocomment">暂无歌曲评论</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="footer_wrap">
            <div class="u_btn">打 开</div>
            <div class="u_btn red">下 载</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentItem from "@/components/CommentItem";
import { getSongComments } from "@/api/comment-api";

export default {
  data() {
    return {
      newComments: [],
      hotComments: [],
      song: "song",
      yBegin: 0,
      yScroll: 0,
      yEnd: 0,
      init: true
    };
  },
  components: {
    CommentItem
  },
  computed: {
    id() {
      return this.$route.query.id;
    }
  },
  methods: {
    playsong() {},
    _getSongComments(id) {
      getSongComments(id).then(res => {
        this.newComments = res.data.comments;
        this.hotComments = res.data.hotComments;
      });
    },
    download() {
      this.$router.push({
        path: "/download"
      });
    },
    touchstart(e) {
      this.yBegin = e.touches[0].pageY
    },
    touchmove(e) {
      // console.log(e)
      this.yScroll = this.yEnd + e.touches[0].pageY - this.yBegin
    },
    touchend(e) {
      this.yEnd = this.yScroll
    }
  },
  created() {
    this._getSongComments(this.id);
  }
};
</script>

<style lang="less" scoped>
.u-height {
  width: 100%;
  height: 100%;
  .safe;
  .root {
    position: relative;
    background-color: #fcfcfd;
    height: 100%;
    .song {
      .after;
      overflow: hidden;
      min-width: 320px;
      .song_bg {
        background-color: #161824;
        background-position: 50%;
        background-repeat: no-repeat;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        overflow: hidden;
        transform-origin: center top;
        z-index: 1;
        transform: scale(1.5);
        transition: opacity 0.3s linear;
        background-image: url("../../assets/img/logo.png");
        &::before {
          .after;
          background-color: rgba(0, 0, 0, 0.5);
        }
      }
      .scroll_wrapper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 60px;
        overflow: hidden;
        z-index: 20;
        .scroll_content {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          min-height: 100%;
          .m-song_newfst {
            height: 752px;  // 临时值
            position: relative;
            padding-bottom: 12px;
            box-sizing: border-box;
            .top_logo {
              position: absolute;
              top: 12px;
              left: 10px;
              display: flex;
              align-items: center;
              .icon-wangyiyunyinle1 {
                color: #d43c33;
                font-size: 18px;
              }
              .logo_ch {
                font-size: 14px;
                color: #fff;
                padding-left: 5px;
              }
            }
            .m-song-wrap {
              padding-top: 63px;
              @media screen and (min-width: 360px) {
                padding-top: 70px;
              }
              @media screen and (min-width: 414px) {
                padding-top: 80px;
              }
              .ignore_disc {
                width: 248px;
                height: 248px;
                margin: 0 auto;
                position: relative;
                @media screen and (min-width: 360px) {
                  width: 296px;
                  height: 296px;
                }
                @media screen and (min-width: 414px) {
                  width: 342px;
                  height: 342px;
                }
                &::after {
                  content: "";
                  position: absolute;
                  top: -63px;
                  left: 107px;
                  z-index: 5;
                  width: 84px;
                  height: 122px;
                  background: url("../../assets/img/needle.png") no-repeat;
                  background-size: contain;
                  @media screen and (min-width: 360px) {
                    width: 96px;
                    height: 137px;
                    top: -70px;
                    left: 133px;
                    background-image: url("../../assets/img/needle-ip6.png");
                  }
                  @media screen and (min-width: 414px) {
                    width: 110px;
                    height: 157px;
                    top: -80px;
                    left: 150px;
                    background-image: url("../../assets/img/needle-plus.png");
                  }
                }
                .m-song-turn {
                  width: 100%;
                  height: 100%;
                  &::before {
                    content: "";
                    .after;
                    background: url("../../assets/img/disc_3x.png") no-repeat;
                    background-size: contain;
                    @media screen and (min-width: 360px) {
                      background-image: url("../../assets/img/disc-ip6.png");
                    }
                    @media screen and (min-width: 414px) {
                      background-image: url("../../assets/img/disc-plus.png");
                    }
                  }
                  .ignore_rollwrap {
                    position: absolute;
                    width: 150px;
                    height: 150px;
                    left: 50%;
                    top: 50%;
                    z-index: 1;
                    margin: -75px 0 0 -75px;
                    @media screen and (min-width: 360px) {
                      width: 184px;
                      height: 184px;
                      margin: -92px 0 0 -92px;
                    }
                    @media screen and (min-width: 414px) {
                      width: 212px;
                      height: 212px;
                      margin: -106px 0 0 -106px;
                    }
                    .song_img {
                      width: 100%;
                      height: 100%;
                      border-radius: 50%;
                      overflow: hidden;
                      background: url("../../assets/img/disc_default.png")
                        no-repeat;
                      background-size: contain;
                      img {
                        width: 100%;
                        vertical-align: middle;
                      }
                    }
                  }
                  .song_lgour {
                    .after;
                    z-index: 3;
                    .song_light {
                      .after;
                      z-index: 3;
                      background: url("../../assets/img/disc_light.png")
                        no-repeat;
                      background-size: contain;
                      @media screen and (min-width: 360px) {
                        background-image: url("../../assets/img/disc_light-ip6.png");
                      }
                      @media screen and (min-width: 414px) {
                        background-image: url("../../assets/img/disc_light-plus.png");
                      }
                    }
                  }
                }
                .ignore_plybtn {
                  width: 50px;
                  height: 50px;
                  left: 50%;
                  top: 50%;
                  position: absolute;
                  transform: translate(-50%, -50%);
                  z-index: 10;
                  background: url("../../assets/img/play_btn.png") 0 0 no-repeat;
                  background-size: contain;
                  @media screen and (min-width: 360px) {
                    width: 56px;
                    height: 56px;
                  }
                  @media screen and (min-width: 414px) {
                    width: 65px;
                    height: 65px;
                    background-image: url("../../assets/img/play_btn_3x.png");
                  }
                }
              }
              .song_clickarea {
                position: absolute;
                width: 100%;
                left: 0;
                top: 0;
                bottom: 52px;
                z-index: 10;
              }
            }
            .song_info {
              margin-top: 25px;
              padding: 0 35px;
              @media screen and (min-width: 360px) {
              }
              @media screen and (min-width: 414px) {
                margin-top: 15px;
              }
              @media screen and (min-height: 672px) {
                margin-top: 25px;
              }
              .song_h2 {
                font-size: 15px;
                text-align: center;
                color: #fefefe;
                line-height: 1.1;
                .text_overflow;
                @media screen and (min-width: 375px) {
                  font-size: 18px;
                }
                .song_gap {
                  margin: 0 4px;
                }
                .song_autr {
                  font-size: 13px;
                  // color: hsla(0, 0%, 100%, .6);
                  color: rgba(255, 255, 255, 0.6);
                }
              }
              .song_lrc {
                position: relative;
                margin-top: 14px;
                @media screen and (min-width: 414px) {
                  margin-top: 6px;
                }
                @media screen and (min-height: 672px) {
                  margin-top: 14px;
                }
                .song_pure {
                  font-size: 13px;
                  color: hsla(0, 0%, 100%, 0.6);
                  text-align: center;
                  line-height: 1;
                  padding-top: 6px;
                  margin-bottom: 6px;
                  @media screen and (min-width: 375px) {
                    font-size: 16px;
                  }
                }
                .song_top {
                  position: relative;
                  z-index: 10;
                }
                .helplrc {
                  text-decoration: underline;
                }
                .songlrc_scroll {
                  height: 88px; // 临时值

                  line-height: 1.5;
                  font-size: 13px;
                  height: 72px;
                  overflow: hidden;
                  text-align: center;
                  // color: hsla(0, 0%, 100%, 0.6);
                  color: rgba(255, 255, 255, 0.6);
                  @media screen and (min-width: 375px) {
                    font-size: 16px;
                  }
                  .lrc_inner {
                    transition: transform 0.3s ease-out;
                    .lrc_item {
                      padding-bottom: 5px;
                      @media screen and (min-width: 375px) {
                        padding-bottom: 8px;
                      }
                    }
                  }
                }
              }
            }
            .link_download {
              position: absolute;
              left: 0;
              right: 0;
              color: hsla(0, 0%, 100%, 0.6);
              height: 30px;
              line-height: 30px;
              box-sizing: border-box;
              display: flex;
              flex-direction: column;
              align-items: center;
              bottom: 18px;
              font-size: 14px;
            }
            .guide {
              position: absolute;
              left: 0;
              right: 0;
              height: 36px;
              padding-top: 10px;
              box-sizing: border-box;
              display: flex;
              flex-direction: column;
              align-items: center;
              z-index: 10;
              bottom: -14px;
              .ignore_arr {
                display: block;
                width: 17px;
                height: 12px;
                background-repeat: no-repeat;
                background-size: 17px auto;
                background-image: url("../../assets/img/guide.png");
                background-position: 0 0;
              }
              .ani {
                @keyframes shine {
                  0% {
                    background-position: 0 0;
                  }
                  15% {
                    background-position: 0 -12px;
                  }
                  30% {
                    background-position: 0 -24px;
                  }
                  45% {
                    background-position: 0 -36px;
                  }
                  60% {
                    background-position: 0 -48px;
                  }
                  75% {
                    background-position: 0 -60px;
                  }
                  90% {
                    background-position: 0 -72px;
                  }
                  100% {
                    background-position: 0 -84px;
                  }
                }
                animation: shine 1.2s steps(1) infinite;
              }
            }
          }
          .m_newcomm {
            position: relative;
            padding-top: 20px;
            .talk_song {
              min-height: 145px;
              margin-top: -20px;
              .m_comments {
                padding-top: 10px;
                word-wrap: break-word;
                word-break: break-word !important;
                .cmt_title {
                  position: relative;
                  padding-left: 10px;
                  line-height: 25px;
                  height: 23px;
                  font-size: 16px;
                  background-color: transparent;
                  color: #fff;
                }
              }
              .cmt_more {
                padding-left: 10px;
                margin-bottom: 40px;
                padding-top: 19px;
                .box {
                  display: block;
                  border: 1px solid #d8d8d8;
                  border-radius: 50px;
                  padding: 10px 0;
                  font-size: 14px;
                  color: #fff;
                  text-align: center;
                  line-height: 1;
                  background-color: rgba(0, 0, 0, 0.12);
                  margin-right: 10px;
                }
              }
            }
            .cmt_title {
              color: #fff;
            }
            .song_cmemp {
              color: #fff;
              padding: 40px 0;
              text-align: center;
              line-height: 40px;
              font-size: 16px;
            }
          }
        }
      }
      .footer {
        background: none;
        z-index: 100;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 10px;
        .footer_wrap {
          display: flex;
          margin: 0 auto;
          padding: 0 10px;
          .u_btn {
            display: inline-block;
            height: 40px;
            line-height: 40px;
            text-align: center;
            box-sizing: border-box;
            border-radius: 40px;
            background: transparent;
            color: #d33a31;
            flex: auto;
            border: 1px solid #d33a31;
            font-size: 18px;
            padding: 0 6px;
            &.red {
              background-color: #d33a31;
              border-color: #d33a31;
              color: #fff;
              margin-left: 10px;
            }
          }
        }
      }
    }
  }
}
</style>