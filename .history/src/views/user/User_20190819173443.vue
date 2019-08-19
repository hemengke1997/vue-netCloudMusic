<template>
  <div class="user_container">
    <div class="root">
      <section class="user_header">
        <div class="userhd_wrap">
          <div class="userhd_in"></div>
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
        }
      }
    }
  }
}
</style>

