<template>
  <div class="topsearch">
    <div class="top">
      <router-link to="/" class="sing">
        <i class="iconfont icon-maikefeng"></i>
      </router-link>
      <router-link to="/search" class="search" tag="div">
        <i class="iconfont icon-search"></i>
        <span>江湖流</span>
      </router-link>
      <router-link to="/player" class="player">
        <i class="iconfont icon-diantai"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
// @import "../../assets/less/variable.less";
.topsearch {
  width: 100%;
  height: 50px;
  position: fixed;
  background-color: @color-theme;
  .top {
      display: flex;
      align-items: center;
      height: 100%;
    .sing {
      font-size: @font-size-medium;
    }
    .search {
      display: flex;
      border-radius: 10px;
      width: 295px;
      height: 40px;
      align-items: center;
      justify-content: center;
      font-size: @font-size-medium;
    }
    .player {
      font-size: @font-size-medium;
    }
  }
}
</style>
