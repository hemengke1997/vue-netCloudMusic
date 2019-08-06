<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
