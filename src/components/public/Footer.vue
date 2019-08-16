<template>
  <footer class="wrapper" v-if="$route.path==='/recommend'">
    <div class="recommend_footer">
      <div class="item_list">
        <div class="logo">
          <i class="iconfont icon-wangyiyunyinle1"></i>
          <span class="title">网易云音乐</span>
        </div>
        <div class="link_app">打开APP，发现更多好音乐 ></div>
        <p class="copyright">网易公司版权所有©1997-2019 杭州乐读科技有限公司运营</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.wrapper {
    background: url("../../assets/img/recommand_bg_2x.png") no-repeat;
    position: relative;
    background-size: contain;
    width: 100%;
    margin-top: 4px;
    padding-top: 53.3%;
    @media screen and (-webkit-device-pixel-ratio: 3){
      background-image: url('../../assets/img/recommand_bg_3x.png');
    }
  .recommend_footer {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    
    .item_list {
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: translateY(60px);
      .logo {
        display: flex;
        align-items: center;
        font-size: 34px;
        .iconfont {
          color: @color-theme;
          font-size: 46px;
          margin-right: 6px;
        }
      }
      .link_app {
        border: 1px solid #d33a31;
        width: 301px;
        height: 40px;
        box-sizing: border-box;
        line-height: 40px;
        text-align: center;
        margin-top: 15px;
        margin-bottom: 5px;
        border-radius: 30px;
        color: #d33a31;
      }
      .copyright {
        color: #888;
        font-size: 12px;
        line-height: 16px;
        transform: scale(0.75);
      }
    }
  }
}
</style>

