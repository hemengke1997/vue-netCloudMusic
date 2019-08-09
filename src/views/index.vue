<template>
  <div id="container">
    <top-search></top-search>
    <tab></tab>
    <app-main></app-main>
  </div>
</template>

<script>
import TopSearch from "public/TopSearch";
import Tab from "public/Tab";
import AppMain from 'public/AppMain'
export default {
  components: {
    TopSearch,
    Tab,
    AppMain
  },
  methods: {}
};
</script>

<style lang="less">
#container {
  overflow-x: hidden;
}
</style>


