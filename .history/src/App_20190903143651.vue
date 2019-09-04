<template>
  <div id="app">
      <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    const {NODE_ENV} = process.env
    document.documentElement.className = NODE_ENV
  }
};
</script>
<style lang="less" scoped>
#app {
  height: 100%;
}
</style>