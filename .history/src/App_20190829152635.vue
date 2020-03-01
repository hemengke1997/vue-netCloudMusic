<template>
  <div id="app">
      <router-view :key="$route.fullPath" />
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