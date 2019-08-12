<template>

  <section class="app-main">
      <van-pull-refresh @refresh="onRefresh" v-model="isLoading">
      <!-- <transition> -->
        <!-- <keep-alive v-if="$route.meta.keepAlive">
          <router-view :key="$route.path"></router-view>
        </keep-alive> -->
        <!-- <router-view v-else></router-view> -->
      <!-- </transition> -->
      </van-pull-refresh>
  </section>
  
</template>

<script>
import { PullRefresh } from "vant";

export default {
  name: "AppMain",
  data() {
    return {
      isLoading: false
    };
  },
  components: {
    [PullRefresh.name]: PullRefresh
  },
  methods: {
    onRefresh() {
      this.isLoading = false;
    }
  }
};
</script>

<style lang="less" scoped>
.app-main {
  margin-top: 143px;
  
  .van-pull-refresh {
      height: 1000px;
  }
}
</style>
