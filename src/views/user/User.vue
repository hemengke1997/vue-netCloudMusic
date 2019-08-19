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
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.user_container {
  .safe;
  .root {
    position: relative;
    background-color: #fcfcfd;
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

