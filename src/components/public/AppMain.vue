<template>
    <van-pull-refresh @refresh="onRefresh" v-model="isLoading">
        <section class="app-main">
        <transition>
            <keep-alive v-if="$route.meta.keepAlive">
                <router-view :key="$route.path"></router-view>
            </keep-alive>
            <router-view v-else></router-view>
        </transition>
     </section>
    </van-pull-refresh>
</template>

<script>
import { PullRefresh } from "vant";

export default {
    name: 'AppMain',
    data() {
        return {
            isLoading: false
        }
    },
    computed: {
        key() {
            return this.$route.path
        }
    },
    components: {
        [PullRefresh.name]: PullRefresh,
    },
    methods:{
        onRefresh() {
            this.isLoading = false
        }
    }
}
</script>

<style lang="less" scoped>
.app-main {
    margin-top: 143px;
}
</style>
