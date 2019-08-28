<template>
  <router-link to="/search" class="wrapper">
    <div class="top">
      <div class="ignore_logo">
        <i class="iconfont icon-wangyiyunyinle"></i>
        <span class="name">minko-music</span>
      </div>
      <div class="ignore_app_link" @click="download">
        下载APP
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  computed: {},
  methods: {
    download() {
      this.$router.push({
        path:'/download'
      })
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.wrapper {
  display: block;
  padding-bottom: 84px;
  position: relative;
  width: 100%;
  height: 0;
  transition: padding-bottom .3s;
  .top {
  width: 100%;
  height: 84px;
  position: fixed;
  left: 0;
  top: 0;
  background-color: @color-theme;
  z-index: 100;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
  .ignore_logo {
    font-size: 20px;
    color: #fff;
    .iconfont {
      text-align: center;
      color: @color-theme;
      display: inline-block;
      font-size: 18px;
      height: 25px;
      width: 25px;
      line-height: 25px;
      background-color: #fff;
      box-sizing: border-box;
      border-radius: 50%;
      transform: translateY(-1px);
    }
  }
  .ignore_app_link {
    width: 100px;
    height: 36px;
    line-height: 36px;
    font-size: 16px;
    text-align: center;
    background-color: #fff;
    border: 1px solid @color-theme;
    border-radius: 48px;
    color: @color-theme;
  }
}
}
</style>
