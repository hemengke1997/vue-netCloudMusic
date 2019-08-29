<template>
  <section class="app-main">
    <router-view :key="$route.path"></router-view>
  </section>
</template>

<script>
export default {
  name: "AppMain"
};
</script>

<style lang="less" scoped>
/* fade-transform */
// .fade-transform-leave-active,
// .fade-transform-enter-active {
//   transition: all .25s;
// }

// .fade-transform-enter {
//   opacity: 0;
//   transform: translateX(-30px);
// }

// .fade-transform-leave-to {
//   opacity: 0;
//   transform: translateX(30px);
// }
.app-main {
  height: calc(100% - 124px);
}
</style>
