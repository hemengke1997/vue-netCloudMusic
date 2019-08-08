<template>
  <div id="app">
    <top-search></top-search>
    <tab></tab>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    
  </div>
</template>
<script>
import TopSearch from 'public/TopSearch'
import Tab from 'public/Tab'
import { setTimeout } from 'timers';
export default {
  components: {
    TopSearch,Tab
  },
  mounted() {
    // console.log(this,'app')
    // console.log(this.$route,'app')
    // setTimeout(()=>{
    //   console.log(this.$route,'zzzzzzzzzzzz')
    // },10)
  }
}
</script>

<style lang="less">
#app {
  overflow-x: hidden;
}
</style>
