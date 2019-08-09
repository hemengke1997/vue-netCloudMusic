<template>
    <section class="app-main">
        <transition>
            <keep-alive v-if="$route.meta.keepAlive">
                <router-view :key="$route.path"></router-view>
            </keep-alive>
            <router-view v-else></router-view>
        </transition>
    </section>
</template>

<script>
export default {
    name: 'AppMain',
    computed: {
        key() {
            return this.$route.path
        }
    }
}
</script>

<style>

</style>
