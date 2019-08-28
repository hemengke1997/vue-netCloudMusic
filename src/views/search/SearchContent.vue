<template>
  <div class="search_content">
    <section class="match_list">
      <h3 class="title">最佳匹配</h3>
      <ul>
        <li class="artist">
          <item :type="1"></item>
        </li>
        <li class="album">
          <item></item>
        </li>
      </ul>
    </section>
    <section class="song_list">
      <music-list></music-list>
    </section>
  </div>
</template>

<script>
import Item from "./Item";
import MusicList from "@/components/Musiclist";
export default {
  name: "SearchContent",
  data() {
    return {};
  },
  components: {
    Item,
    MusicList
  }
};
</script>

<style lang="less" scoped>
.search_content {
  .match_list {
    padding: 8px 0 4px;
    .title {
      margin-left: 10px;
      font-size: 12px;
      line-height: 16px;
      color: #666;
    }
    .artist,
    .album {
      position: relative;
      height: 66px;
    }
  }
}
</style>