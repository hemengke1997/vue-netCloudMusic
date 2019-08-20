<template>
  <div class="u-height">
    <div class="root">
        <div class="song">
          <div class="song_bg"></div>
          <div class="scroll_wrapper">
            <div class="scroll_content">
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
                            <img src="../../assets/img/logo.png" alt="">
                          </div>
                        </div>
                        <div class="song_lgour">
                          <div class="song_light"></div>
                        </div>
                      </div>
                      <span class="ignore_plybtn"></span>
                    </div>
                  </div>
                </div>
                <div class="comment"></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
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
        transition: opacity .3s linear;
        background-image: url('../../assets/img/logo.png');
        &::before {
          .after;
          background-color: rgba(0, 0, 0, .5);
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
            height: 752px;
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
              @media screen and (min-width: 360px){
                padding-top: 70px;
              }
              @media screen and (min-width: 414px){
                padding-top: 80px;
              }
              .ignore_disc {
                width: 248px;
                height: 248px;
                margin: 0 auto;
                position: relative;
                @media screen and (min-width: 360px){
                  width: 296px;
                  height: 296px;
                }
                @media screen and (min-width: 414px){
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
                  background: url('../../assets/img/needle.png') no-repeat;
                  background-size: contain;
                  @media screen and (min-width: 360px){
                    width: 96px;
                    height: 137px;
                    top: -70px;
                    left: 133px;
                    background-image: url('../../assets/img/needle-ip6.png');
                  }
                  @media screen and (min-width: 414px){
                    width: 110px;
                    height: 157px;
                    top: -80px;
                    left: 150px;
                    background-image: url('../../assets/img/needle-plus.png');
                  }
                }
                .m-song-turn {
                  width: 100%;
                  height: 100%;
                  &::before {
                    content: "";
                    .after;
                    background: url('../../assets/img/disc_3x.png') no-repeat;
                    background-size: contain;
                    @media screen and (min-width: 360px){
                      background-image: url('../../assets/img/disc-ip6.png');
                    }
                     @media screen and (min-width: 414px){
                       background-image: url('../../assets/img/disc-plus.png');
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
                    @media screen and (min-width: 360px){
                      width: 184px;
                      height: 184px;
                      margin: -92px 0 0 -92px;
                    }
                    @media screen and (min-width: 414px){
                      width: 212px;
                      height: 212px;
                      margin: -106px 0 0 -106px;
                    }
                    .song_img {
                      width: 100%;
                      height: 100%;
                      border-radius: 50%;
                      overflow: hidden;
                      background: url('../../assets/img/disc_default.png') no-repeat;
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
                      background: url('../../assets/img/disc_light.png') no-repeat;
                      background-size: contain;
                      @media screen and (min-width: 360px){
                        background-image: url('../../assets/img/disc_light-ip6.png');
                      }
                      @media screen and (min-width: 414px){
                        background-image: url('../../assets/img/disc_light-plus.png');
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
                  transform: translate(-50%,-50%);
                  z-index: 10;
                  background: url('../../assets/img/play_btn.png') 0 0 no-repeat;
                  background-size: contain;
                  @media screen and (min-width: 360px){
                    width: 56px;
                    height: 56px;
                  }
                  @media screen and (min-width: 414px){
                    width: 65px;
                    height: 65px;
                    background-image: url('../../assets/img/play_btn_3x.png');
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>