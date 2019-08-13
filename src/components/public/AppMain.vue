<template>
  <section class="app-main">
      <transition>
        <keep-alive>
          <router-view :key="$route.fullPath"></router-view>
        </keep-alive>
      </transition>
  </section>
  
</template>

<script>

export default {
  name: "AppMain",
};
</script>

<style lang="less" scoped>

</style>
