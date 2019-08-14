<template>
  <section class="app-main">
      <transition name="fade-transform" mode="out-in">
          <router-view :key="$route.path"></router-view>
      </transition>
  </section>
  
</template>

<script>

export default {
  name: "AppMain",
};
</script>

<style lang="less" scoped>
/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .3s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
