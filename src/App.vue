<template>
  <div id="app">
    <keep-alive>
      <router-view :key="$route.fullPath" />
    </keep-alive>
  </div>
</template>

<script>
export default {
  computed: {
    // key() {
    //   return this.$route.
    // }
  }
};
</script>
<style lang="less" scoped>
#app {
  height: 100%;
}
</style>