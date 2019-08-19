<template>
  <div class="user_container">
    <div class="root">
      <section class="user_header">
        <div class="userhd_wrap">
          <div class="userhd_in">
            <div class="userhd_top">
              <div class="listen_count">
                <p class="number">123</p>
                <p class="number_ch">听歌数</p>
              </div>
              <div class="ignore_userhd_avatar">
                <img src="../../assets/img/logo.png">
              </div>
              <div class="followed">
                <p class="fans">2</p>
                <p class="fans_ch">粉丝数</p>
              </div>
            </div>
            <div class="usrhd_info">
              <div class="usrhd_name">
                <h1 class="username">贺梦柯</h1>
              </div>
              <div class="ignore_usrhd_follow">
                <span class="follow">关注</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <user-playlist></user-playlist>
    </div>
  </div>
</template>

<script>
import UserPlaylist from '@/components/UserPlaylist'
export default {
  components:{
    UserPlaylist
  }
};
</script>

<style lang="less" scoped>
.user_container {
  .safe;
  .root {
    position: relative;
    height: 100%;
    .user_header {
      padding-bottom: 64.49%;
      width: 100%;
      position: relative;
      .userhd_wrap {
        background-image: url("../../assets/img/hot_music_bg_2x.jpg");
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-size: cover;
        background-position: 50%;
        &::before {
          content: "";
          .after;
          background-color: rgba(0, 0, 0, 0.2);
        }
        .userhd_in {
          position: absolute;
          left: 0;
          top: 50%;
          z-index: 2;
          transform: translateY(-50%);
          width: 100%;
          @media screen and (min-width: 360px){
            margin-top: 1%;
          }
          @media screen and (min-width: 375px){
            margin-top: 2.5%;
          }
          .userhd_top {
            display: flex;
            .listen_count {
              flex: auto;
              height: 80px;
              padding-top: 20px;
              box-sizing: border-box;
              text-align: center;
              padding-right: 2%;
              @media screen and (min-width: 360px){
                padding-right: 5%;
              }
            }
            .ignore_userhd_avatar {
              width: 80px;
              height: 80px;
              position: relative;
              img {
                width: 100%;
                border-radius: 50%;
              }
            }
            .followed {
              flex: auto;
              height: 80px;
              padding-top: 20px;
              text-align: center;
              box-sizing: border-box;
              padding-left: 2%;
              @media screen and (min-width: 360px){
                padding-left: 5%
              }
            }
          }
          .usrhd_info {
            width: 100%;
            padding: 0 9.7%;
            box-sizing: border-box;
            .usrhd_name {
              display: flex;
              align-items: center;
              justify-content: center;
              overflow: hidden;
              margin-top: 9px;
              font-size: 17px;
              .username {
                .text_overflow;
                font-size: 17px;
                color: #fff;
              }
            }
            .ignore_usrhd_follow {
              width: 126px;
              height: 30px;
              margin: 6px auto;
              border: 1px solid hsla(0,0%,100%,.8);
              border-radius: 15px;
              line-height: 28px;
              box-sizing: border-box;
              font-size: 13px;
              color: #fff;
              text-align: center;
              position: relative;
              padding-left: 15px;
              &::before,
              &::after {
                content: "";
                position: absolute;
                background-color: #fff;
              }
              &:before {
                width: 1px;
                height: 13px;
                left: 47px;
                top: 6px;
              }
              &:after {
                width: 13px;
                height: 1px;
                left: 41px;
                top: 12px;
              }
            }
          }
        }
      }
    }
    
  }
}
.number,
.fans {
  color: #fff;
  font-size: 17px;
  min-height: 20px;
}
.number_ch,
.fans_ch {
  color: hsla(0, 0, 100%, .6);
  margin-top: 1px;
  font-size: 12px;
}
</style>

