<template>
  <div>
    <div class="collect_fixed collect_bottom">
      <div class="collect_wrapper">
        <div class="collect_inner" @click="download">
          <i class="iconfont icon-wangyiyunyinle"></i>
          <span class="collect_logo" v-cloak>{{text}}</span>
        </div>
      </div>
    </div>
    <div class="footer_ph"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    download() {
      this.$router.push({
        path: "/download"
      });
    }
  }
};
</script>

<style lang="less" scoped>
[v-cloak] {
  display: none;
}
.collect_fixed {
  width: 100%;
  position: fixed;
  z-index: 10;
  bottom: 0;
  background-color: #fff;
  @media only screen and (device-height: 812px) and (device-width: 375px) {
    padding-bottom: env(safe-area-inset-bottom);
  }
  &::after {
    .small_border;
    border-top-width: 1px;
  }
  .collect_wrapper {
    margin: 0 auto;
    padding: 7px 30px;
    display: flex;
    .collect_inner {
      flex: auto;
      display: flex;
      align-items: center;
      color: #fff;
      background-color: #d33a31;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      border-radius: 999px;
      justify-content: center;
      .icon-wangyiyunyinle {
        font-size: 26px;
        margin-right: 2px;
      }
    }
  }
}
.footer_ph {
  height: 56px;
}
</style>