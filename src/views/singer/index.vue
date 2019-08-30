<template>
  <div class="singer_root">
    <singer></singer>
    <detail-des></detail-des>
    <music-list></music-list>
    <collect-sheet :text="text"></collect-sheet>
    <loading v-if="isLoading"></loading>
  </div>
</template>

<script>
import Singer from "./Singer";
import DetailDes from "@/components/DetailDes";
import MusicList from "@/components/Musiclist";
import CollectSheet from "@/components/CollectSheet";
import Loading from "public/Loading";


export default {
  data() {
    return {
      isLoading: false,
      text: "下载热门歌曲"
    };
  },
  components: {
    Singer,
    DetailDes,
    MusicList,
    CollectSheet,
    Loading
  }
};
</script>

<style lang="less" scoped>
.singer_root {
  height: 100%;
  min-height: 100%;
  box-sizing: border-box;
}
</style>