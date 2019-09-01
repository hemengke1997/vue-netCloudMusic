<template>
  <div class="loading_box">
    <img src="../../assets/img/loading.gif" alt="loading" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.loading_box {
  .after;
  background-color: #fff;
  z-index: 999;
  img {
    .loading_img;
  }
}
</style>