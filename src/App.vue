<template>
  <div id="app">
    <top-search></top-search>
    <tab></tab>
  
   
        <router-view></router-view>
    

    
  </div>
</template>
<script>
import TopSearch from 'public/TopSearch'
import Tab from 'public/Tab'
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
