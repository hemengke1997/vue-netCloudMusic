<template>
  <transition name="fade-top" mode="out-in">
    <div class="u-height">
      <div class="root">
        <div class="song">
          <div class="song_bg" :style="{backgroundImage:`url('${songs.al.picUrl}')`,opacity:1}"></div>
          <scroll class="scroll_wrapper" ref="scrollContainer">
            <div class="scroll_content">
              <div>
                <div class="m-song_newfst">
                  <div class="top_logo">
                    <i class="iconfont icon-wangyiyunyinle1"></i>
                    <span class="logo_ch">minko音乐</span>
                  </div>
                  <transition name="fade-disc">
                    <div class="m-song-wrap">
                      <div class="ignore_disc" :class="{playing:playing}">
                        <div class="m-song-turn">
                          <div class="ignore_rollwrap">
                            <div class="song_img circling" :class="{circling_paused:!playing}">
                              <img :src="songs.al.picUrl" alt="songpic" />
                            </div>
                          </div>
                          <div class="song_lgour circling" :class="{circling_paused:!playing}">
                            <div class="song_light"></div>
                          </div>
                        </div>
                        <span class="ignore_plybtn" v-show="!playing"></span>
                      </div>
                      <div class="song_clickarea" @click="playsong"></div>
                    </div>
                  </transition>
                  <div class="song_info">
                    <h2 class="song_h2">
                      <span class="song_title">{{songs.name}}</span>
                      <span class="song_gap">-</span>
                      <span class="song_autr">{{singers(songs.ar)}}</span>
                    </h2>
                    <div class="song_lrc">
                      <p class="song_pure song_top" v-if="noLrc">
                        暂无歌词，
                        <span class="helplrc">求歌词</span>
                      </p>
                      <div
                        class="songlrc_scroll"
                        v-if="!noLrc"
                        :style="{height:`${lrc_height}px`}"
                        ref="scrollLyr"
                      >
                        <div
                          class="lrc_inner"
                          :style="{transform:`translateY(${lyc_translateY}px)`}"
                        >
                          <p
                            class="lrc_item"
                            v-for="(item,index) in lyric"
                            :key="index"
                            :class="{light:lycActive(index)}"
                            :ref="index"
                          >{{lyc(index)}}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="link_download" v-if="!noLrc">查看完整歌词 ></div>
                  <div class="guide">
                    <i class="ignore_arr ani" @click="gotoNext"></i>
                  </div>
                </div>
                <div class="m_morelist" ref="target">
                  <h3 class="u_title">包含这首歌的歌单</h3>
                  <ul>
                    <li
                      v-for="(item,index) in simiPlaylists"
                      :key="index"
                      @click="gotoPlaylist(item.id)"
                    >
                      <figure class="cover">
                        <img v-lazy="item.coverImgUrl" alt="playlist" />
                        <div class="play_count">
                          <i class="iconfont icon-erji"></i>
                          <span v-cloak>{{count(item.playCount)}}</span>
                        </div>
                      </figure>
                      <h3 class="playlist_title">{{item.name}}</h3>
                      <p class="sub">
                        <span class="author">by {{item.creator.nickname}}</span>
                      </p>
                    </li>
                  </ul>
                </div>
                <div class="m_moresongs">
                  <h3 class="u_title">喜欢这首歌的人也听</h3>
                  <ul>
                    <li v-for="(item,index) in simiSongs" :key="index" @click="gotoSong(item.id)">
                      <figure class="ignore_cover">
                        <img :src="item.album.picUrl" alt="song" />
                      </figure>
                      <article>
                        <h3 class="song_title">{{item.name}}</h3>
                        <p class="song_des">{{singers(item.artists)}} - {{item.album.name}}</p>
                      </article>
                      <i class="iconfont icon-bofang"></i>
                    </li>
                  </ul>
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
                        <h3 class="cmt_title" v-cloak>最新评论{{newComments.length}}</h3>
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
          </scroll>
          <div class="footer">
            <div class="footer_wrap">
              <div class="u_btn" @click="download">打 开</div>
              <div class="u_btn red" @click="download">下 载</div>
            </div>
          </div>
        </div>
      </div>
      <audio
        id="music-audio"
        ref="audio"
        @ended="ended"
        @error="error"
        @timeupdate="updateTime($event)"
      ></audio>
    </div>
  </transition>
</template>

<script>
import CommentItem from "@/components/comment/CommentItem";
import { getSongComments } from "@/api/comment-api";
import {
  getSong,
  getLyric,
  getSimiSongs,
  getSimiPlaylist,
  getSongUrl
} from "@/api/song-api";
import { OK } from "js/config";
import Scroll from "public/Scroll";
export default {
  data() {
    return {
      newComments: [],
      hotComments: [],
      song: "song",
      scroll: Object,
      screenWidth: document.body.clientWidth,
      lrc_height: Number,
      noLrc: false,
      songs: {
        al: {
          picUrl: ""
        }
      },
      simiSongs: [],
      simiPlaylists: [],
      songUrl: "",
      playing: false,
      duration: 0,
      lyric: [],
      author: [],
      currentTime: [],
      lyc_time_index: 0, // 当前歌词跟时间戳的index
      lyc_translateY: 0, // 歌词上移的距离
      lycNeedScroll: 0 //  播放时间改变时 总会触发updateTime方法 为了避免每次触发方法时都去遍历时间戳，就立了这个flag
    };
  },
  components: {
    CommentItem,
    Scroll
  },
  computed: {
    id() {
      return this.$route.query.id;
    },
    singers() {
      return function(ar) {
        if (ar) {
          if (ar.length === 1) {
            return ar[0].name;
          } else {
            let temp = [];
            ar.forEach(singer => {
              temp.push(singer.name);
            });
            return temp.join(" / ");
          }
        }
      };
    },
    count() {
      return ct => {
        if (ct / 10000 >= 1) {
          return Math.floor(ct / 10000) + "万";
        } else if (ct / 10000 < 1) {
          return ct;
        }
      };
    },
    lycActive() {
      return index => {
        return index === this.lyc_time_index;
      };
    },
    lyc() {
      return index => {
        return this.lyric[index] === "" ? "····" : this.lyric[index];
      };
    }
  },
  methods: {
    playsong() {
      if (this.playing) {
        this.$refs.audio.pause();
        this.playing = !this.playing;
      } else {
        this.$refs.audio.play();
        this.playing = !this.playing;
      }
    },
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
    setLrcHeight(h) {
      if (h >= 375) {
        this.lrc_height = 88;
      } else {
        this.lrc_height = 67;
      }
    },
    gotoNext() {
      this.$refs.scrollContainer.scrollToElement(this.$refs.target, 500);
    },
    _getSong(id) {
      getSong(id).then(res => {
        this.songs = res.data.songs[0];
        // console.log(this.songs)
      });
    },
    _getLyric(id) {
      getLyric(id).then(res => {
        if (res.data.lrc.lyric) {
          this.noLrc = false;
          this.lyric = res.data.lrc.lyric;
          let pattern1 = /\[\d{2}:\d{2}\.\d{2,3}\]/g;
          this.currentTime = this.lyric.match(pattern1);
          this.currentTime = this.currentTime.map(item => {
            return this.myAdd(
              parseInt(item.slice(1, -2).split(":")[0] * 60),
              item.slice(2, -1).split(":")[1]
            );
          });
          // other: 除开时间  剩下的
          let other = this.lyric.replace(pattern1, "");
          let pattern2 = /\[.*\]/g;
          this.author = other.match(pattern2);
          this.lyric = other
            .replace(pattern2, "")
            .split(/[\n]/)
            .slice((this.author && this.author.length) || 0, -1);
          // console.log(this.currentTime)
          // console.log(other, "剩下的");
          // console.log(this.lyric, "歌词");
          // console.log(this.author, "作者");
        } else {
          this.noLrc = true;
        }
      });
    },
    _getSimiSongs(id) {
      getSimiSongs(id).then(res => {
        if (res.status === OK) {
          this.simiSongs = res.data.songs;
        }
      });
    },
    _getSimiPlaylist(id) {
      getSimiPlaylist(id).then(res => {
        if (res.status === OK) {
          this.simiPlaylists = res.data.playlists;
        }
      });
    },
    _getSongUrl(id) {
      getSongUrl(id).then(res => {
        if (res.status === OK) {
          this.songUrl = res.data.data[0].url;
          this.$refs.audio.src = this.songUrl;
        }
      });
    },
    gotoSong(id) {
      this.$router.push({
        path: "song",
        query: { id: id }
      });
    },
    gotoPlaylist(id) {
      this.$router.push({
        path: "/playlist/detail",
        query: { id: id }
      });
    },
    ended() {
      this.playing = false;
      this.lyc_time_index = 0;
      this.lyc_translateY = 0;
      this.lycNeedScroll = 0;
    },
    error() {
      this.$router.replace(this.$route.fullPath);
    },
    updateTime(e) {
      for (let i = this.lycNeedScroll; i < this.currentTime.length; i++) {
        if (e.target.currentTime >= this.currentTime[i]) {
          this.lycNeedScroll = i + 1;
          this.lyc_time_index = i;
          if (i > 1) {
            this.lyc_translateY -= this.$refs[i - 2][0].offsetHeight;
          }
          break;
        }
      }
    },
    // 处理JS float精度问题
    myAdd(n1, n2) {
      let len = n2.split(".")[1].length;
      let x = n1 * Math.pow(10, len);
      let y = parseInt(
        n2.toString().split(".")[0] + n2.toString().split(".")[1]
      );
      return (x + y) / Math.pow(10, len);
    }
  },
  created() {
    this._getSongComments(this.id);
    this._getSong(this.id);
    this._getLyric(this.id);
    this._getSimiSongs(this.id);
    this._getSimiPlaylist(this.id);
    this._getSongUrl(this.id);
  },
  mounted() {
    const _this = this;
    window.onresize = () => {
      return (() => {
        _this.screenWidth = document.body.clientWidth;
      })();
    };
    this.setLrcHeight(this.screenWidth);
     this.$refs.audio.src = this.songUrl;
  },
  watch: {
    screenWidth(h) {
      this.setLrcHeight(h);
    }
  },
};
</script>

<style lang="less" scoped>
[v-cloak] {
  display: none
}
// 整个界面的过渡效果
.fade-top-leave-active,
.fade-top-enter-active {
  transition: all 0.3s;
}
.fade-top-enter {
  opacity: 0;
  transform: translateY(-40px);
}
.fade-top-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
// 播放器的过渡效果
.fade-disc-leave-active,
.fade-disc-enter-active {
  transition: all 0.5s;
}
.fade-disc-enter,
.fade-disc-leave-to {
  opacity: 0;
}

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
        background-size: auto 100%;
        filter: blur(60px) brightness(50%);
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
        &::before {
          .after;
          background-color: rgba(0, 0, 0, 0.25);
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
        // 用浏览器原生的滚动模拟
        // overflow-y: scroll;
        // -webkit-overflow-scrolling: touch;
        // &::-webkit-scrollbar {
        //   display: none;  隐藏滚动条
        // }
        .scroll_content {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          min-height: 100%;
          .m-song_newfst {
            height: calc(~"100vh-66px");
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
                  transition: transform 0.2s linear;
                  transform-origin: top left;
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
                &.playing::after {
                  transform: rotate(-17deg);
                  transform-origin: left top;
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
                      &.circling {
                        @keyframes circling {
                          0% {
                            transform: rotate(0);
                          }
                          100% {
                            transform: rotate(1turn);
                          }
                        }
                        animation: circling 20s linear infinite;
                      }
                      &.circling_paused {
                        animation-play-state: paused;
                      }
                      img {
                        width: 100%;
                        vertical-align: middle;
                      }
                    }
                  }
                  .song_lgour {
                    .after;
                    z-index: 3;
                    &.circling {
                      @keyframes circling {
                        0% {
                          transform: rotate(0);
                        }
                        100% {
                          transform: rotate(1turn);
                        }
                      }
                      animation: circling 20s linear infinite;
                    }
                    &.circling_paused {
                      animation-play-state: paused;
                    }
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
                font-size: 1px;
                text-align: center;
                color: #fefefe;
                line-height: 1.1;
                overflow: hidden;
                .text_overflow;
                .song_title,
                .song_gap {
                  font-size: 15px;
                  @media screen and (min-width: 375px) {
                    font-size: 18px;
                  }
                }
                .song_gap {
                  margin: 0 4px;
                }
                .song_autr {
                  font-size: 13px;
                  // color: hsla(0, 0%, 100%, .6);
                  color: rgba(255, 255, 255, 0.6);
                  @media screen and (min-width: 375px) {
                    font-size: 16px;
                  }
                }
              }
              .song_lrc {
                position: relative;
                margin-top: 40px;
                @media screen and (min-width: 414px) {
                  margin-top: 45px;
                }
                @media screen and (min-height: 672px) {
                  margin-top: 55px;
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
                  height: 72px;
                  line-height: 1.5;
                  font-size: 13px;
                  overflow: hidden;
                  text-align: center;
                  // color: hsla(0, 0%, 100%, 0.6);
                  color: rgba(255, 255, 255, 0.6);
                  @media screen and (min-width: 375px) {
                    font-size: 16px;
                  }
                  .lrc_inner {
                    transition: transform 0.2s linear;
                    .lrc_item {
                      padding-bottom: 5px;
                      @media screen and (min-width: 375px) {
                        padding-bottom: 8px;
                      }
                      &.light {
                        color: rgb(255, 255, 255);
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
          .m_morelist {
            padding-top: 40px;
            padding-bottom: 30px;
            line-height: 1.6;
            padding-left: env(safe-area-inset-left);
            padding-right: env(safe-area-inset-right);
            .u_title {
              position: relative;
              padding-left: 10px;
              line-height: 18px;
              color: #fff;
              font-size: 16px;
              &::after {
                .title_after;
              }
            }
            ul {
              display: flex;
              margin-top: 12px;
              li {
                flex: auto;
                width: 1%;
                margin-left: 3px;
                &:first-child {
                  margin-left: 0;
                }
                .cover {
                  position: relative;
                  padding-bottom: 100%;
                  overflow: hidden;
                  &::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 25px;
                    z-index: 1;
                    background: -webkit-gradient(
                      linear,
                      left top,
                      left bottom,
                      from(rgba(0, 0, 0, 0.3)),
                      to(transparent)
                    );
                    background: linear-gradient(
                      180deg,
                      rgba(0, 0, 0, 0.3),
                      transparent
                    );
                  }
                  img {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                    z-index: 1;
                  }
                  .play_count {
                    .listen_count;
                    .icon-erji {
                      font-size: 12px;
                    }
                  }
                }
                .playlist_title {
                  margin: 2px 0 -1px;
                  padding: 0 6px;
                  color: #fff;
                  font-size: 13px;
                  .text_overflow;
                }
                .sub {
                  position: relative;
                  padding: 0 19px 0 6px;
                  color: hsla(0, 0%, 100%, 0.6);
                  font-size: 12px;
                  height: 20px;
                  overflow: hidden;
                  .author {
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    position: relative;
                    float: left;
                  }
                }
              }
            }
          }
          .m_moresongs {
            margin-top: 10px;
            padding-bottom: 30px;
            line-height: 1.6;
            padding-left: env(safe-area-inset-left);
            padding-right: env(safe-area-inset-right);
            .u_title {
              position: relative;
              padding-left: 10px;
              line-height: 18px;
              color: #fff;
              font-size: 16px;
              &::after {
                .title_after;
              }
            }
            ul {
              margin-top: 10px;
              li {
                padding: 7px 0 10px 10px;
                height: 40px;
                position: relative;
                overflow: hidden;
                .ignore_cover {
                  width: 40px;
                  height: 40px;
                  float: left;
                  margin-right: 10px;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
                article {
                  padding-bottom: 7px;
                  padding-right: 40px;
                  height: 100%;
                  position: relative;
                  .song_title {
                    line-height: 18px;
                    font-size: 15px;
                    color: #fff;
                    .text_overflow;
                  }
                  .song_des {
                    margin-top: 2px;
                    color: hsla(0, 0%, 100%, 0.6);
                    .text_overflow;
                  }
                  &:after {
                    .small_border;
                    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
                  }
                }
                .icon-bofang {
                  position: absolute;
                  right: 12px;
                  color: hsla(0, 0%, 100%, 0.5);
                  top: 50%;
                  transform: translateY(-50%);
                  font-size: 26px;
                }
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