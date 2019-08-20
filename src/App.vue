<template>
  <div id="app">
    <transition>
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    // key() {
    //   return this.$route.
    // }
  }
}
</script>
<style lang="less" scoped>
#app {
  height: 100%;
}
</style>