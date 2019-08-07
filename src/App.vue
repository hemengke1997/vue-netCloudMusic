<template>
  <div id="app">
    <top-search v-if="1"></top-search>
    <transition>
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </transition>
    <bottom-tags></bottom-tags>
  </div>
</template>
<script>
import TopSearch from 'public/TopSearch'
import BottomTags from 'public/BottomTags'
export default {
  components: {
    TopSearch,BottomTags
  }
}
</script>

<style lang="less">

</style>
