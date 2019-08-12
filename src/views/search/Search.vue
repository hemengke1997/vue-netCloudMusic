<template>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="test">

        </div>
    </van-pull-refresh>
</template>

<script>
import { PullRefresh } from "vant";
import { setTimeout } from "timers";
export default {
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
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },
  }
}
</script>

<style scoped>
.test {
    width: 200px;
    height: 200px;
}

</style>
