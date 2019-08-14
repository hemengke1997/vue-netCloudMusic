<template>
  <div id="container">
    <top></top>
    <tab></tab>
    <app-main></app-main>
  </div>
</template>

<script>
import Top from "public/Top";
import Tab from "public/Tab";
import AppMain from 'public/AppMain'
export default {
  components: {
    Top,
    Tab,
    AppMain
  },
  methods: {}
};
</script>

<style lang="less">
#container {
  overflow: hidden;
}
</style>


