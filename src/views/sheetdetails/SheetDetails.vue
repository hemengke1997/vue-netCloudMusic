<template>
  <div id="j-app" class="u-height">
    <div class="root">
      <div class="playlist u-paddlr u-paddbm">
        <div class="top">
          <section class="header">
            <div class="ignore_plhead_bg"></div>
            <div class="plhead_wrap">
              <div class="ignore_plhead_left">
                <img src alt />
                <i class="iconfont icon-erji">xxx万</i>
                <span>歌单</span>
              </div>
              <div class="plhead_right">
                <h2 class="title">音乐强心剂</h2>
                <div class="auth">
                  <div class="auth_wrap">
                    <div class="ignore_auth_header">
                      <img src="../../assets/img/logo.png" alt />
                      <span class="daren-icon"></span>
                    </div>-情商雨夜-
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="pllist_intro">
            <div class="tags">
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
export default {
  data() {
    return {};
  },
  components: {
    MusicList
  },
  mounted() {
    console.log("play");
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
              @media screen and (min-width: 360px) {
                width: 126px;
                height: 126px;
              }
              @media screen and (min-width: 414px) {
                width: 145px;
                height: 145px;
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
                    border-width: 1px;
                    border-radius: 999px;
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